// Importa o client para fazer as requisições à TMDB
import * as moviesClient from "./movies.client";

// Importa as funções de mapeamento para transformar os dados da TMDB no formato da API do Crimson Play
import { formatMovieList, MoviePreviewDto, MovieDetailsDto } from "./movies.mapper";

// Usa funções auxiliares para montar as requisições
// Requisição para obter filmes em tendência
export const getTrendingMovies = async () => {
  const data = await moviesClient.getTrendingMovies();
  return formatMovieList(data.results || []);
};

// Requisição para obter filmes populares
export const getPopularMovies = async () => {
  const data = await moviesClient.getPopularMovies();
  return formatMovieList(data.results || []);
};

// Requisição para obter filmes com melhor avaliação
export const getTopRatedMovies = async () => {
  const data = await moviesClient.getTopRatedMovies();
  return formatMovieList(data.results || []);
};

// Requisição para obter filmes que ainda serão lançados
export const getUpcomingMovies = async () => {
  const data = await moviesClient.getUpcomingMovies();
  return formatMovieList(data.results || []);
};

// Requisição para formar o Preview de um filme específico, informações básicas
export const getMoviePreview = async (movieId: string) => {
  const data = await moviesClient.getMoviePreview(movieId);
  return MoviePreviewDto(data);
};

// Requisição para obter detalhes de um filme específico, informações completas
export const getMovieDetails = async (movieId: string) => {
  const data = await moviesClient.getMovieDetails(movieId);
  return MovieDetailsDto(data);
};

// Requisição para obter recomendações de filmes similares a um filme específico
export const getMovieRecommendations = async (movieId: string) => {
  const data = await moviesClient.getMovieRecommendations(movieId);
  return formatMovieList(data.results || []);
};
