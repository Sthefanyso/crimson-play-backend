// Importa as funções auxiliares de formatação de dados
const {
  getDirector,
  getAgeRating,
} = require("./movies.helper");

const { 
  buildImageUrl,
  formatImagesByType,
  formatVideosByType, 
} = require("../../shared/helpers/media.helper");

const {
  formatRuntime,
  formatDate,
  formatStatus,
  formatCurrency,
} = require("../../shared/helpers/format.helper");


// Função para formatar a lista de filmes
const formatMovieList = (movies = []) => {
  return {
    filmes: movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: buildImageUrl(movie.poster_path),
      year: movie.release_date?.split("-")[0], // extrai apenas o ano da data de lançamento
      rating: Number(movie.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
    })),
  };
};

// Função para formatar o DTO de Preview
const MoviePreviewDto = (data) => {
  return {
    mediaType: "movie",
    id: data.id,
    title: data.title,
    poster: buildImageUrl(data.poster_path),
    director: getDirector(data.credits),
    duration: formatRuntime(data.runtime),
    year: data.release_date?.split("-")[0], // extrai apenas o ano da data de lançamento
    rating: Number(data.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
    genres: (data.genres || []).map((genre) => genre.name), // lista os gêneros do filme
    overview: data.overview,
  };
};

// Função para formatar o DTO de Details
const MovieDetailsDto = (data) => {
  return {
    mediaType: "movie",

    // Seção Info
    // Informações básicas para a seção de destaque de detalhes do filme
    info: {
      id: data.id,
      title: data.title,
      poster: buildImageUrl(data.poster_path),
      year: data.release_date?.split("-")[0], // extrai apenas o ano da data de lançamento
      director: getDirector(data.credits),
      duration: formatRuntime(data.runtime),
      rating: Number(data.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
      genres: (data.genres || []).map((genre) => genre.name),
      overview: data.overview,
    },

    // Seção Datasheet
    // Informações adicionais para a seção "Ficha Técnica"
    datasheet: {
      releaseDate: formatDate(data.release_date), // data de lançamento completa
      status: formatStatus(data.status), // status do filme (ex: "Released", "Post Production", etc.)
      title: data.title,
      titleOriginal: data.original_title,
      director: getDirector(data.credits),
      production: data.production_companies
        .map((company) => company.name)
        .join(", "), // lista as produtoras separadas por vírgula
      duration: formatRuntime(data.runtime),
      ageRating: getAgeRating(data.release_dates),
      languageOriginal: data.original_language,
      genres: (data.genres || []).map((genre) => genre.name).join(", "), // lista os gêneros separados por vírgula
      currency: "USD",
      budget: formatCurrency(data.budget),
      revenue: formatCurrency(data.revenue),
    },

    // Seção Mídia
    // Imagens e vídeos relacionados ao filme
    media: {
      photos: {
        posters: formatImagesByType(data.images?.posters || []),
        backdrops: formatImagesByType(data.images?.backdrops || []),
      },
      videos: {
        trailers: formatVideosByType(data.videos?.results || [], "Trailer"),
        teasers: formatVideosByType(data.videos?.results || [], "Teaser"),
        clips: formatVideosByType(data.videos?.results || [], "Clip"),
        behindTheScenes: formatVideosByType(
          data.videos?.results || [],
          "Behind the Scenes",
        ),
        featurettes: formatVideosByType(
          data.videos?.results || [],
          "Featurette",
        ), // featurettes = extras/especiais
      },
    },
  };
};

module.exports = {
  formatMovieList,
  MoviePreviewDto,
  MovieDetailsDto,
};
