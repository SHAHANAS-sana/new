// Quick test to verify if the Instagram access token is valid

const ACCESS_TOKEN =
  'EAAV1KGANimMBP8ZA6VQZBPVLACmK3eSK7Wh0rdCgLrsTNWdE49ZATMdXMYgR9ZCo5Yix2pEKSojxGAMjZAuNV6teQZCSosvhiw1cvOJJz1C1yFUBuJGU4UfRoVV78bnm7f2bKRtFnnZCLtKDeiwgr2q3oi0wK9FQ2gYl0UosCilZAIDsfEYLASGP8WlU80NrZCPqijr4K5h6RAwEzmjK91OkvIXftwr6mc2bUZCFSxGrQpjxCZBkQZDZD';
const USER_ID = '17841445846341777';

async function testToken() {
  console.log('Testing Instagram access token...\n');

  try {
    // Test 1: Debug token to see details
    console.log('1. Checking token validity...');
    const debugUrl = `https://graph.facebook.com/debug_token?input_token=${ACCESS_TOKEN}&access_token=${ACCESS_TOKEN}`;
    const debugResponse = await fetch(debugUrl);
    const debugData = await debugResponse.json();

    if (debugData.data) {
      console.log('Token Details:');
      console.log('- Valid:', debugData.data.is_valid);
      console.log('- App ID:', debugData.data.app_id);
      console.log('- User ID:', debugData.data.user_id);
      console.log(
        '- Expires:',
        debugData.data.expires_at
          ? new Date(debugData.data.expires_at * 1000).toLocaleString()
          : 'Never'
      );
      console.log('- Scopes:', debugData.data.scopes?.join(', ') || 'None');
    } else {
      console.log('Token is INVALID or EXPIRED');
      console.log('Error:', debugData.error);
    }

    console.log('\n2. Testing Instagram API call...');
    const mediaUrl = `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`;
    const mediaResponse = await fetch(mediaUrl);
    const mediaData = await mediaResponse.json();

    if (mediaData.error) {
      console.log('❌ Instagram API Error:');
      console.log('- Message:', mediaData.error.message);
      console.log('- Type:', mediaData.error.type);
      console.log('- Code:', mediaData.error.code);
      console.log('\n⚠️ You need to generate a new access token!');
      console.log('\nSteps to fix:');
      console.log('1. Go to: https://developers.facebook.com/tools/explorer/');
      console.log('2. Select your app: AlramsCrm');
      console.log('3. Click "Generate Access Token"');
      console.log('4. Check the "Al RAMS Furniture" page in the popup');
      console.log(
        '5. Grant permissions: pages_show_list, pages_read_engagement, instagram_basic'
      );
      console.log('6. Copy the new token and update .env file');
    } else if (mediaData.data) {
      console.log('✅ Success! Found', mediaData.data.length, 'media items');
      mediaData.data.slice(0, 2).forEach((item, index) => {
        console.log(`\nReel ${index + 1}:`);
        console.log('- Type:', item.media_type);
        console.log('- Caption:', item.caption?.substring(0, 50) + '...');
        console.log('- URL:', item.permalink);
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testToken();
