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

const formatEpisodeRuntime = (episodeRunTime = []) => {
  const runtime = episodeRunTime[0];

  if (!runtime) return "Não informado";

  return `${runtime} min`;
};

module.exports = {
  formatSeriesYears,
  formatSeriesType,
  formatEpisodeRuntime,
};