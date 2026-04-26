// Configuração de imagens da TMDB
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Helpers de mídia
const buildImageUrl = (path) => {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
};

module.exports = {
  buildImageUrl,
};
