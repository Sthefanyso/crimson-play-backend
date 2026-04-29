// Função para formatar os anos de exibição de uma série
const formatSeriesYears = (firstAirDate, lastAirDate) => {
  const startYear = firstAirDate?.split("-")[0];

  if (!startYear) return "Não informado";

  const endYear = lastAirDate?.split("-")[0];

  if (!endYear) return `${startYear} - Atual`;

  return `${startYear} - ${endYear}`;
};

// Função para mapear o tipo de série para português
const formatSeriesType = (type) => {
  if (!type) return "Não informado";

  const typeMap = {
    Scripted: "Roteirizada",
    Reality: "Reality Show",
    Documentary: "Documentário",
    News: "Notícias",
    "Talk Show": "Talk Show",
    Miniseries: "Minissérie",
  };

  return typeMap[type] || type;
};

// Função para formatar o tempo de duração de um episódio
const formatEpisodeRuntime = (episodeRunTime = []) => {
  const runtime = episodeRunTime[0];

  if (!runtime) return "Não informado";

  return `${runtime} min`;
};

// Função para obter a classificação indicativa de uma série, priorizando a classificação brasileira (BR) e, se não disponível, a classificação americana (US), se não tiver a informação, retorna "Não informado"
const getSeriesAgeRating = (contentRatings) => {
  const results = contentRatings?.results || [];

  const br = results.find((c) => c.iso_3166_1 === "BR");
  const us = results.find((c) => c.iso_3166_1 === "US");

  return br?.rating || us?.rating || "Não informado";
};

module.exports = {
  formatSeriesYears,
  formatSeriesType,
  formatEpisodeRuntime,
  getSeriesAgeRating,
};