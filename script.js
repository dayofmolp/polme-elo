// YouTube API Integration - Display Latest Videos
function loadYouTubeVideos() {
  const apiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube API key
  const channelId = 'YOUR_CHANNEL_ID'; // Replace with your YouTube channel ID
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const videosContainer = document.getElementById('youtube-videos');
      data.items.forEach(item => {
        const video = document.createElement('iframe');
        video.src = `https://www.youtube.com/embed/${item.id.videoId}`;
        videosContainer.appendChild(video);
      });
    })
    .catch(error => console.error('Error loading YouTube videos:', error));
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadYouTubeVideos);
