// Importa o client para fazer as requisições à TMDB
const seriesClient = require("./series.client");

// Importa as funções de mapeamento para transformar os dados da TMDB no formato da API do Crimson Play
const {
  formatSeriesList,
  SeriesPreviewDto,
} = require("./series.mapper");

// Usa funções auxiliares para montar as requisições
// Requisição para obter séries em tendência
exports.getTrendingSeries = async () => {
  const data = await seriesClient.getTrendingSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para obter séries que estão no ar
exports.getOnTheAirSeries = async () => {
  const data = await seriesClient.getOnTheAirSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para obter séries populares
exports.getPopularSeries = async () => {
  const data = await seriesClient.getPopularSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para obter séries com melhor avaliação
exports.getTopRatedSeries = async () => {
  const data = await seriesClient.getTopRatedSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para formar o Preview de uma série específica, informações básicas
exports.getSeriesPreview = async (seriesId) => {
  const data = await seriesClient.getSeriesPreview(seriesId);
  return SeriesPreviewDto(data || []);
};