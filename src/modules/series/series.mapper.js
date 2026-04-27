// Importa as funções auxiliares de formatação de dados
const { buildImageUrl } = require("../../shared/helpers/media.helper");

const { formatSeriesYears } = require("./series.helper");

// Função para formatar o DTO de lista de séries
const formatSeriesList = (series = []) => {
  return series.map((serie) => ({
    id: serie.id,
    name: serie.name,
    poster: buildImageUrl(serie.poster_path),
    year: serie.first_air_date?.split("-")[0] || "Não informado",
    rating: serie.vote_average ? Number(serie.vote_average.toFixed(1)) : 0,
  }));
};

// Função para formatar o DTO de Preview de série
const SeriesPreviewDto = (data) => {
  return {
    mediaType: "series",
    id: data.id,
    name: data.name,
    poster: buildImageUrl(data.poster_path),
    seasons: data.number_of_seasons,
    episodes: data.number_of_episodes,
    years: formatSeriesYears(data.first_air_date, data.last_air_date), // formata os anos de exibição da série
    rating: Number(data.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
    genres: (data.genres || []).map((genre) => genre.name), // lista os gêneros da série
    overview: data.overview,
  };
};

module.exports = {
  formatSeriesList,
  SeriesPreviewDto,
};
