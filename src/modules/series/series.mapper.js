// Importa as funções auxiliares de formatação de dados 
const {
  buildImageUrl,
} = require("../../shared/helpers/media.helper");


const formatSeriesList = (series = []) => {
  return series.map((serie) => ({
    id: serie.id,
    name: serie.name,
    poster: buildImageUrl(serie.poster_path),
    year: serie.first_air_date?.split("-")[0] || "Não informado",
    rating: serie.vote_average
      ? Number(serie.vote_average.toFixed(1))
      : 0,
  }));
};

module.exports = {
  formatSeriesList,
};