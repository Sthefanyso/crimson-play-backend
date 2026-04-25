// Importa o client para fazer as requisições à TMDB
const moviesClient = require("./movies.client");

// Importa as funções de mapeamento para transformar os dados da TMDB no formato da API do Crimson Play
const {
  formatMovieList,
  MoviePreviewDto,
  MovieDetailsDto,
} = require("./movies.mapper");

// Usa funções auxiliares para montar as requisições
// Requisição para obter filmes em tendência
exports.getTrendingMovies = async () => {
  const data = await moviesClient.getTrendingMovies();
  return formatMovieList(data.results || []);
};

// Requisição para obter filmes populares
exports.getPopularMovies = async () => {
  const data = await moviesClient.getPopularMovies();
  return formatMovieList(data.results || []);
};

// Requisição para obter filmes com melhor avaliação
exports.getTopRatedMovies = async () => {
  const data = await moviesClient.getTopRatedMovies();
  return formatMovieList(data.results || []);
};

// Requisição para obter filmes que ainda serão lançados
exports.getUpcomingMovies = async () => {
  const data = await moviesClient.getUpcomingMovies();
  return formatMovieList(data.results || []);
};

// Requisição para formar o Preview de um filme específico, informações básicas
exports.getMoviePreview = async (movieId) => {
  const data = await moviesClient.getMoviePreview(movieId);
  return MoviePreviewDto(data);
};

// Requisição para obter detalhes de um filme específico, informações completas
exports.getMovieDetails = async (movieId) => {
  const data = await moviesClient.getMovieDetails(movieId);
  return MovieDetailsDto(data);
};
