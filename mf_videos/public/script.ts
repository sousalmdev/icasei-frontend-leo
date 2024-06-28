const apiKey = process.env.YOUTUBE_API_KEY;
const searchInput = document.getElementById('search') as HTMLInputElement;
const videosContainer = document.getElementById('videos') as HTMLElement;

async function searchVideos() {
  const query = searchInput.value;
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${apiKey}`);
  const data = await response.json();
  displayVideos(data.items);
}

function displayVideos(videos: any[]) {
  videosContainer.innerHTML = '';
  videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.className = 'video';
    videoElement.innerHTML = `
      <h3>${video.snippet.title}</h3>
      <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      <button onclick="toggleFavorite(${video.id.videoId})">⭐</button>
    `;
    videosContainer.appendChild(videoElement);
  });
}

async function toggleFavorite(videoId: string) {
  const response = await fetch('http://localhost:3002/favorites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: videoId })
  });
  const favorites = await response.json();
}
