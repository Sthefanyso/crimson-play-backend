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
// Séries em tendência
const getTrendingSeries = () => {
  return fetchTmdbData("/trending/tv/week");
};

// Séries que estão no ar
const getOnTheAirSeries = () => {
  return fetchTmdbData("/tv/on_the_air");
};

// Séries populares
const getPopularSeries = () => {
  return fetchTmdbData("/tv/popular");
};

// Séries com melhor avaliação
const getTopRatedSeries = () => {
  return fetchTmdbData("/tv/top_rated");
};

// Detalhes de uma série específica para formar o Preview
const getSeriesPreview = (seriesId) => {
  return fetchTmdbData(`/tv/${seriesId}`, "append_to_response=content_ratings");
}

// Detalhes de uma série específica para formar os detalhes completos
const getSeriesDetails = (seriesId) => {
  return fetchTmdbData(`/tv/${seriesId}`,
    "&language=pt-BR&append_to_response=content_ratings,images,videos&include_image_language=en,null",
  );
}

// Requisição para obter recomendações de séries similares a uma série específica
const getSeriesRecommendations = (seriesId) => {
  return fetchTmdbData(`/tv/${seriesId}/recommendations`);
};

module.exports = {
  getTrendingSeries,
  getOnTheAirSeries,
  getPopularSeries,
  getTopRatedSeries,
  getSeriesPreview,
  getSeriesDetails,
  getSeriesRecommendations,
};
