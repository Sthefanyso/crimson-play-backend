// Variáveis de ambiente para montar as URLs de requisição à TMDB
const BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;
const LANGUAGE = "pt-BR";

// Helper para requisições à TMDB com tratamento de erros 
const fetchTmdbData = async (path, params = "") => {
  const url = `${BASE_URL}${path}?api_key=${API_KEY}&language=${LANGUAGE}${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Erro na TMDB");
  }

  return response.json();
};

// Funções específicas para cada endpoint da TMDB, usando o helper fetchTmdbData para fazer as requisições
// Filmes em tendência
const getTrendingMovies = () => {
  return fetchTmdbData("/trending/movie/week");
};

// Filmes populares
const getPopularMovies = () => {
  return fetchTmdbData("/movie/popular");
};

// Filmes com melhor avaliação
const getTopRatedMovies = () => {
  return fetchTmdbData("/movie/top_rated");
};

// Filmes que ainda serão lançados
const getUpcomingMovies = () => {
  return fetchTmdbData("/movie/upcoming");
};

// Informações básicas de um filme específico para a seção de preview
const getMoviePreview = (movieId) => {
  return fetchTmdbData(`/movie/${movieId}`, "&append_to_response=credits");
};

// Informações completas de um filme específico para a seção de detalhes
const getMovieDetails = (movieId) => {
  return fetchTmdbData(
    `/movie/${movieId}`,
    "&append_to_response=credits,images,videos,release_dates&include_image_language=en,null",
  );
};

// Requisição para obter recomendações de filmes similares a um filme específico
const getMovieRecommendations = (movieId) => {
  return fetchTmdbData(`/movie/${movieId}/recommendations`);
};

module.exports = {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMoviePreview,
  getMovieDetails,
  getMovieRecommendations
};