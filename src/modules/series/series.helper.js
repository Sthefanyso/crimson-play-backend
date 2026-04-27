// Função para formatar os anos de exibição de uma série
const formatSeriesYears = (firstAirDate, lastAirDate) => {
  const startYear = firstAirDate?.split("-")[0];

  if (!startYear) return "Não informado";

  const endYear = lastAirDate?.split("-")[0];

  if (!endYear) return `${startYear} - Atual`;

  return `${startYear} - ${endYear}`;
};

module.exports = {
  formatSeriesYears,
};