// Configuração de imagens da TMDB
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Helpers de mídia
export const buildImageUrl = (path: string | null | undefined) => {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
};

// Formata lista de imagens
export const formatImagesByType = (images: any[] = []) => {
  if (!Array.isArray(images) || images.length === 0) return [];
  
  return images.map((image) => ({
    url: buildImageUrl(image.file_path),
  }));
};

// Formata lista de vídeos
export const formatVideosByType = (videos: any[] = [], type: string) => {
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
