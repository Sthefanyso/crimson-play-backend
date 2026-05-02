// Configuração de imagens da TMDB
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Helpers de mídia
const buildImageUrl = (path) => {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
};

// Formata lista de imagens
const formatImagesByType = (images = []) => {
  if (!Array.isArray(images) || images.length === 0) return [];
  
  return images.map((image) => ({
    url: buildImageUrl(image.file_path),
  }));
};

// Formata lista de vídeos
const formatVideosByType = (videos = [], type) => {
  if (!Array.isArray(videos) || videos.length === 0) return [];

  return videos
    .filter((video) => video.site === "YouTube" && video.type === type)
    .map((video) => ({
      id: video.id,
      name: video.name,
      key: video.key,
      url: `https://www.youtube.com/watch?v=${video.key}`,
    }));
};

module.exports = {
  buildImageUrl,
  formatImagesByType,
  formatVideosByType,
};
