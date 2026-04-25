// Configuração de imagens da TMDB
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Helpers de mídia
const buildImageUrl = (path) => {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
};

// Formata lista de imagens
const formatImagesByType = (images = []) => {
  return images.map((image) => ({
    url: buildImageUrl(image.file_path),
  }));
};

// Formata lista de vídeos
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

// Helpers de informações do filme
// Extrai informações específicas (diretor e classificação indicativa)
const getDirector = (credits) => {
  return (
    credits?.crew.find((member) => member.job === "Director")?.name ||
    "Desconhecido"
  );
};

const getAgeRating = (releaseDates) => {
  const certificationData = releaseDates?.results;

  const br = certificationData?.find((c) => c.iso_3166_1 === "BR");
  const us = certificationData?.find((c) => c.iso_3166_1 === "US");

  const getCertification = (country) =>
    country?.release_dates.find((release) => release.certification)
      ?.certification;

  return getCertification(br) || getCertification(us) || "Não informado";
};

// Helpers de formatação de campos (runtime, date, status, currency)
const formatRuntime = (minutes) => {
  if (!minutes) return null;

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${h}h ${m}min`;
};

const formatDate = (date) => {
  if (!date) return null;

  return new Date(date).toLocaleDateString("pt-BR");
};

const formatStatus = (status) => {
  const statusMap = {
    Released: "Lançado",
    "Post Production": "Pós-produção",
    InProduction: "Em produção",
    Planned: "Planejado",
  };

  return statusMap[status] || status;
};

const formatCurrency = (value) => {
  if (!value) return null;

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  });
};

module.exports = {
  buildImageUrl,
  formatImagesByType,
  formatVideosByType,
  getDirector,
  getAgeRating,
  formatRuntime,
  formatDate,
  formatStatus,
  formatCurrency,
};