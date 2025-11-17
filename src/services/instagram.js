/**
 * Instagram Reels Service
 * 
 * Since Instagram API requires complex authentication, we'll use
 * actual Instagram reel embeds which are more reliable and show real content
 */

const INSTAGRAM_ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID;

/**
 * Get actual Instagram reels from @alramsfurnitureshowroom
 * These are real reels that will be embedded
 */
export const fetchInstagramReels = async () => {
  // Return actual reels from the Instagram account
  // These URLs can be updated manually or fetched from a backend
  return [
    {
      id: '1',
      permalink: 'https://www.instagram.com/reel/DRHmwhTkkEh/',
      embedUrl: 'https://www.instagram.com/reel/DRHmwhTkkEh/embed',
      thumbnail: '/images/categories/2.jpg',
      caption: 'Shades of നീല that make home feel softer 💙 #AlramsFurniture #InteriorDesign #HomeDecor',
      timestamp: new Date().toISOString()
    },
    {
      id: '2', 
      permalink: 'https://www.instagram.com/reel/DRAj7l9k8X5/',
      embedUrl: 'https://www.instagram.com/reel/DRAj7l9k8X5/embed',
      thumbnail: '/images/categories/1.jpg',
      caption: 'Where laughter, love, and little dreams find their perfect space ✨ #ModernInteriors #FurnitureShowroom',
      timestamp: new Date().toISOString()
    }
  ];
};

/**
 * Alternative: Fetch using Instagram Basic Display API
 * Simpler but requires user authentication
 */
export const fetchInstagramReelsBasic = async () => {
  try {
    if (!INSTAGRAM_ACCESS_TOKEN) {
      return getFallbackReels();
    }

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data');
    }

    const data = await response.json();
    
    const reels = data.data
      .filter(item => item.media_type === 'VIDEO')
      .slice(0, 2)
      .map(reel => ({
        id: reel.id,
        permalink: reel.permalink,
        thumbnail: reel.thumbnail_url || reel.media_url,
        caption: reel.caption || 'Watch our latest reel',
        timestamp: reel.timestamp
      }));

    return reels.length > 0 ? reels : getFallbackReels();
  } catch (error) {
    console.error('Error fetching Instagram reels:', error);
    return getFallbackReels();
  }
};

/**
 * Fallback reels data when API is not available
 */
const getFallbackReels = () => {
  return [
    {
      id: 'fallback-1',
      permalink: 'https://www.instagram.com/alramsfurnitureshowroom/reels/',
      thumbnail: '/assets/living room-13.jpeg',
      caption: 'Explore our latest furniture collection - Premium designs for your home'
    },
    {
      id: 'fallback-2',
      permalink: 'https://www.instagram.com/alramsfurnitureshowroom/reels/',
      thumbnail: '/assets/living room-11.jpeg',
      caption: 'Modern interior designs and decor inspiration for every space'
    }
  ];
};

/**
 * Alternative approach using third-party services (No API key needed)
 * Note: These may have rate limits and reliability issues
 */
export const fetchInstagramReelsProxy = async (username) => {
  try {
    // Using a proxy service (example - replace with actual service)
    const response = await fetch(
      `https://www.instagram.com/${username}/?__a=1&__d=dis`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data');
    }

    const data = await response.json();
    
    // Parse and extract reels from the response
    // Note: Instagram's response structure may change
    const reels = extractReelsFromProfile(data);
    
    return reels.length > 0 ? reels : getFallbackReels();
  } catch (error) {
    console.error('Error fetching Instagram reels via proxy:', error);
    return getFallbackReels();
  }
};

/**
 * Extract reels from Instagram profile data
 */
const extractReelsFromProfile = (data) => {
  try {
    const edges = data?.graphql?.user?.edge_owner_to_timeline_media?.edges || [];
    
    const reels = edges
      .filter(edge => edge.node.is_video)
      .slice(0, 2)
      .map(edge => ({
        id: edge.node.id,
        permalink: `https://www.instagram.com/p/${edge.node.shortcode}/`,
        thumbnail: edge.node.thumbnail_src || edge.node.display_url,
        caption: edge.node.edge_media_to_caption?.edges[0]?.node?.text || 'View on Instagram'
      }));

    return reels;
  } catch (error) {
    console.error('Error extracting reels:', error);
    return [];
  }
};

export default {
  fetchInstagramReels,
  fetchInstagramReelsBasic,
  fetchInstagramReelsProxy,
  getFallbackReels
};
