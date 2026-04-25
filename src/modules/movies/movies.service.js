const { fetchTmdbData } = require("./movies.client");

const {
  buildImageUrl,
  formatImagesByType,
  formatVideosByType,
  getDirector,
  getAgeRating,
} = require("./movies.helper");

const { formatMovieList, MoviePreviewDto, MovieDetailsDto } = require("./movies.mapper");

// Sequência de requisições para os endpoints de listas de filmes que formarão a home movie do site
// req para trazer os filmes em tendência
exports.getTrendingMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// req para trazer os filmes populares
exports.getPopularMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// req para trazer os filmes com melhor avaliação
exports.getTopRatedMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// req para trazer os filmes que ainda serão lançados
exports.getUpcomingMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// Preview de um filme específico, informações básicas
exports.getMoviePreview = async (movieId) => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=pt-BR&append_to_response=credits`,
  );

  return MoviePreviewDto(data);
};

// Detalhes de um filme específico, informações completas
exports.getMovieDetails = async (movieId) => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=pt-BR&append_to_response=credits,images,videos,release_dates&include_image_language=en,null`,
  ); // usa o recurso append_to_response para trazer elenco, imagens e videos relacionados ao filme, e include_image_language para trazer mais imagens, em inglês e sem filtro de idioma, não apenas as imagens em português.

  return MovieDetailsDto(data);
};
