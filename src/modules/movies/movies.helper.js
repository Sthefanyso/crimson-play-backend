const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Monta a URL completa de uma imagem da TMDB
const buildImageUrl = (path) => {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
};
// Formata uma lista de imagens da TMDB para o formato usado pela API
const formatImagesByType = (images = []) => {
  return images.map((image) => ({
    url: buildImageUrl(image.file_path),
  }));
};

// Filtra e formata vídeos da TMDB por tipo
const formatVideosByType = (videos = [], type) => {
  return videos
    .filter((video) => video.site === "YouTube" && video.type === type)
    .map((video) => ({
      id: video.id,
      name: video.name,
      key: video.key,
      url: `https://www.youtube.com/watch?v=${video.key}`,
    }));
};

// Função para extrair o nome do diretor do filme
// lógica: se houver mais de um, exibe o primeiro encontrado, se não encontrar nenhum, exibe "Desconhecido"
const getDirector = (credits) => {
  return (
    credits?.crew.find((member) => member.job === "Director")?.name ||
    "Desconhecido"
  );
};

const getAgeRating = (releaseDates) => {
  // Lógica para extrair os dados de classificação indicativa retornados pela TMDB
  const certificationData = releaseDates?.results;

  // Localiza as classificações para Brasil e EUA
  const br = certificationData?.find((c) => c.iso_3166_1 === "BR");
  const us = certificationData?.find((c) => c.iso_3166_1 === "US");

  // Função auxiliar que retorna a classificação válida de um país (se existir)
  const getCertification = (country) =>
    country?.release_dates.find((release) => release.certification)
      ?.certification;

  // Define a classificação final: prioriza a classificação brasileira, se não existir, usa a americana, se nenhuma existir, exibe "Não informado"    
  return getCertification(br) || getCertification(us) || "Não informado";
};

module.exports = {
  buildImageUrl,
  formatImagesByType,
  formatVideosByType,
  getDirector,
  getAgeRating,
};
