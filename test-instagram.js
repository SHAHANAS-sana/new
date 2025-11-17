// Quick test script to get Instagram Business Account ID
// Run with: node test-instagram.js

const ACCESS_TOKEN =
  'EAAV1KGANimMBP5iWVZBOI4R2iRZAN9qMk14UO6HsiAlGdv1XMGbIGyXW2qLwOlY0NUJMX4sZAz0UA5cUSj97AfUYWmpJA5ZAn7qOHiWFkdiNztmHZCTINZAmTuyBRNX1KlZAfZAK8PWwu0LsbD2HhfuGjFZAQrq0ZAP7xfbvROUp25RuvY7r3cX2JGvY3uR73cgGbJwnRqwUnBiNIfVR34ZBaa2rRHleyn0SEcFHRKPSMIEckPaEgZDZD';

async function getInstagramUserId() {
  try {
    console.log('🔍 Fetching Facebook Pages...\n');

    // Step 1: Get Facebook Pages
    const pagesResponse = await fetch(
      `https://graph.facebook.com/v18.0/me/accounts?access_token=${ACCESS_TOKEN}`
    );
    const pagesData = await pagesResponse.json();

    if (pagesData.error) {
      console.error('❌ Error:', pagesData.error.message);
      return;
    }

    console.log('📄 Your Facebook Pages:');
    pagesData.data.forEach((page, i) => {
      console.log(`  ${i + 1}. ${page.name} (ID: ${page.id})`);
    });
    console.log('');

    // Step 2: Get Instagram Business Account for each page
    for (const page of pagesData.data) {
      try {
        const igResponse = await fetch(
          `https://graph.facebook.com/v18.0/${page.id}?fields=instagram_business_account&access_token=${ACCESS_TOKEN}`
        );
        const igData = await igResponse.json();

        if (igData.instagram_business_account) {
          console.log('✅ Found Instagram Business Account!');
          console.log(`   Page: ${page.name}`);
          console.log(
            `   Instagram ID: ${igData.instagram_business_account.id}`
          );
          console.log('');
          console.log('📋 Add this to your .env file:');
          console.log(
            `   REACT_APP_INSTAGRAM_USER_ID=${igData.instagram_business_account.id}`
          );
          console.log('');

          // Test fetching media
          console.log('🔍 Testing media fetch...');
          const mediaResponse = await fetch(
            `https://graph.facebook.com/v18.0/${igData.instagram_business_account.id}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=2&access_token=${ACCESS_TOKEN}`
          );
          const mediaData = await mediaResponse.json();

          if (mediaData.data && mediaData.data.length > 0) {
            console.log(
              `✅ Successfully fetched ${mediaData.data.length} media items!`
            );
            console.log('');
            console.log('📱 Recent posts:');
            mediaData.data.forEach((item, i) => {
              console.log(`  ${i + 1}. Type: ${item.media_type}`);
              console.log(`     Caption: ${item.caption?.substring(0, 50)}...`);
              console.log(`     URL: ${item.permalink}`);
              console.log('');
            });
          } else {
            console.log(
              '⚠️  No media found or error:',
              mediaData.error?.message || 'Unknown'
            );
          }

          return;
        }
      } catch (err) {
        console.log(`   No Instagram account linked to ${page.name}`);
      }
    }

    console.log('❌ No Instagram Business Account found on any page.');
    console.log('');
    console.log('💡 Make sure:');
    console.log(
      '   1. Your Instagram account is a Business or Creator account'
    );
    console.log('   2. Instagram is connected to a Facebook Page');
    console.log('   3. You are admin of both the Page and Instagram account');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

getInstagramUserId();
