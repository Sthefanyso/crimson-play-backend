// Importa o client para fazer as requisições à TMDB
import * as seriesClient from "./series.client";

// Importa as funções de mapeamento para transformar os dados da TMDB no formato da API do Crimson Play
import { formatSeriesList,
  SeriesPreviewDto,
  SeriesDetailsDto,
  SeasonDetailsDto,
  EpisodeDetailsDto } from "./series.mapper";


// Usa funções auxiliares para montar as requisições
// Requisição para obter séries em tendência
export const getTrendingSeries = async () => {
  const data = await seriesClient.getTrendingSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para obter séries que estão no ar
export const getOnTheAirSeries = async () => {
  const data = await seriesClient.getOnTheAirSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para obter séries populares
export const getPopularSeries = async () => {
  const data = await seriesClient.getPopularSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para obter séries com melhor avaliação
export const getTopRatedSeries = async () => {
  const data = await seriesClient.getTopRatedSeries();
  return formatSeriesList(data.results || []);
};

// Requisição para formar o Preview de uma série específica, informações básicas
export const getSeriesPreview = async (seriesId: string) => {
  const data = await seriesClient.getSeriesPreview(seriesId);
  return SeriesPreviewDto(data || []);
};

// Requisição para formar os detalhes de uma série específica, informações completas
export const getSeriesDetails = async (seriesId: string) => {
  const data = await seriesClient.getSeriesDetails(seriesId);
  return SeriesDetailsDto(data || []);
};

// Requisição para obter recomendações de séries similares a uma série específica
export const getSeriesRecommendations = async (seriesId: string) => {
  const data = await seriesClient.getSeriesRecommendations(seriesId);
  return formatSeriesList(data.results || []);
};

// Requisição para obter detalhes de uma temporada específica de uma série
export const getSeasonDetails = async (seriesId: string, seasonNumber: string) => {
  const data = await seriesClient.getSeasonDetails(seriesId, seasonNumber);
  return SeasonDetailsDto(data || []);
};

// Requisição para obter detalhes de um episódio específico de uma temporada de uma série
export const getEpisodeDetails = async (seriesId: string, seasonNumber: string, episodeNumber: string) => {

  const data = await seriesClient.getEpisodeDetails(seriesId, seasonNumber, episodeNumber);
  return EpisodeDetailsDto(data || []);
};