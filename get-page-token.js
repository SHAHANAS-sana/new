// Script to get the correct Page Access Token for Instagram

const USER_ACCESS_TOKEN =
  'EAAV1KGANimMBP8ZA6VQZBPVLACmK3eSK7Wh0rdCgLrsTNWdE49ZATMdXMYgR9ZCo5Yix2pEKSojxGAMjZAuNV6teQZCSosvhiw1cvOJJz1C1yFUBuJGU4UfRoVV78bnm7f2bKRtFnnZCLtKDeiwgr2q3oi0wK9FQ2gYl0UosCilZAIDsfEYLASGP8WlU80NrZCPqijr4K5h6RAwEzmjK91OkvIXftwr6mc2bUZCFSxGrQpjxCZBkQZDZD';

async function getPageAccessToken() {
  console.log('🔍 Fetching Page Access Token...\n');

  try {
    // Step 1: Get all pages
    const pagesResponse = await fetch(
      `https://graph.facebook.com/v18.0/me/accounts?access_token=${USER_ACCESS_TOKEN}`
    );
    const pagesData = await pagesResponse.json();

    if (pagesData.error) {
      console.error('❌ Error fetching pages:', pagesData.error.message);
      return;
    }

    if (!pagesData.data || pagesData.data.length === 0) {
      console.log('❌ No Facebook Pages found. Make sure:');
      console.log('1. You have a Facebook Page connected to your account');
      console.log('2. The token has pages_show_list permission');
      return;
    }

    console.log(`✅ Found ${pagesData.data.length} Facebook Page(s):\n`);

    // Step 2: For each page, get the Instagram Business Account
    for (const page of pagesData.data) {
      console.log(`📄 Page: ${page.name}`);
      console.log(`   ID: ${page.id}`);
      console.log(`   Page Token: ${page.access_token.substring(0, 50)}...`);

      // Get Instagram Business Account for this page
      const igResponse = await fetch(
        `https://graph.facebook.com/v18.0/${page.id}?fields=instagram_business_account&access_token=${page.access_token}`
      );
      const igData = await igResponse.json();

      if (igData.instagram_business_account) {
        const igAccountId = igData.instagram_business_account.id;
        console.log(`   📸 Instagram Account ID: ${igAccountId}`);

        // Test the Page Access Token with Instagram API
        const testResponse = await fetch(
          `https://graph.instagram.com/${igAccountId}/media?fields=id,caption,media_type&access_token=${page.access_token}`
        );
        const testData = await testResponse.json();

        if (testData.error) {
          console.log(`   ❌ Error: ${testData.error.message}`);
        } else {
          console.log(
            `   ✅ SUCCESS! This Page Token works with Instagram API`
          );
          console.log(`   Found ${testData.data?.length || 0} media items\n`);

          console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
          console.log('📋 UPDATE YOUR .env FILE WITH THESE VALUES:');
          console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
          console.log(`VITE_INSTAGRAM_USER_ID=${igAccountId}`);
          console.log(`VITE_INSTAGRAM_ACCESS_TOKEN=${page.access_token}`);
          console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

          // Show sample reels
          if (testData.data && testData.data.length > 0) {
            console.log('📹 Sample Media:');
            testData.data.slice(0, 3).forEach((item, index) => {
              console.log(
                `${index + 1}. ${item.media_type}: ${item.caption?.substring(
                  0,
                  60
                )}...`
              );
            });
          }

          return; // Stop after finding the first working page
        }
      } else {
        console.log(`   ⚠️ No Instagram Business Account linked to this page`);
      }
      console.log('');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('⚠️ No working Instagram account found!');
    console.log('Make sure your Instagram Business Account is');
    console.log('properly connected to your Facebook Page.');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

getPageAccessToken();
