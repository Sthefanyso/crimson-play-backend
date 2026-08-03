// Variáveis de ambiente para montar as URLs de requisição à TMDB
const BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;
const LANGUAGE = "pt-BR";

// Helper para requisições à TMDB com tratamento de erros
const fetchTmdbData = async (path: string, params: string = "") => {
  const url = `${BASE_URL}${path}?api_key=${API_KEY}&language=${LANGUAGE}${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Erro na TMDB");
  }

  return response.json();
};

// Funções específicas para cada endpoint da TMDB, usando o helper fetchTmdbData para fazer as requisições
// Séries em tendência
export const getTrendingSeries = () => {
  return fetchTmdbData("/trending/tv/week");
};

// Séries que estão no ar
export const getOnTheAirSeries = () => {
  return fetchTmdbData("/tv/on_the_air");
};

// Séries populares
export const getPopularSeries = () => {
  return fetchTmdbData("/tv/popular");
};

// Séries com melhor avaliação
export const getTopRatedSeries = () => {
  return fetchTmdbData("/tv/top_rated");
};

// Detalhes de uma série específica para formar o Preview
export const getSeriesPreview = (seriesId: string) => {
  return fetchTmdbData(
    `/tv/${seriesId}`,
    "&append_to_response=content_ratings",
  );
};

// Detalhes de uma série específica para formar os detalhes completos
export const getSeriesDetails = (seriesId: string) => {
  return fetchTmdbData(
    `/tv/${seriesId}`,
    "&append_to_response=content_ratings,images,videos&include_image_language=en,null",
  );
};

// Requisição para obter recomendações de séries similares a uma série específica
export const getSeriesRecommendations = (seriesId: string) => {
  return fetchTmdbData(`/tv/${seriesId}/recommendations`);
};

// Detalhes de uma temporada específica de uma série
export const getSeasonDetails = async (seriesId: string, seasonNumber: string) => {
  return fetchTmdbData(`/tv/${seriesId}/season/${seasonNumber}`);
};

// Detalhes de um episódio específico de uma temporada de uma série
export const getEpisodeDetails = async (seriesId: string, seasonNumber: string, episodeNumber: string) => {
  return fetchTmdbData(
    `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}`,
    "&append_to_response=credits",
  );
};
