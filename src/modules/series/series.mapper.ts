// Importa as funções auxiliares de formatação de dados
import {
  buildImageUrl,
  formatImagesByType,
  formatVideosByType,
} from ("../../shared/helpers/media.helper");

import {
  formatDate,
  formatStatus,
  formatLanguage,
  formatCountry,
} from ("../../shared/helpers/format.helper");

import {
  formatSeriesYears,
  formatSeriesType,
  formatEpisodeRuntime,
  getSeriesAgeRating,
} from ("./series.helper");

import {
  formatCast,
  formatGuestStars,
} from ("../../shared/helpers/cast.helper");

import {
  safeOverview,
  safeRating,
  safeMap,
} from ("../../shared/helpers/safe.helper");

// Função para formatar o DTO de lista de séries
export const formatSeriesList = (series: any[] = []) => {
  return series.map((serie) => ({
    mediaType: "series",
    id: serie.id,
    name: serie.name,
    poster: buildImageUrl(serie.poster_path),
    year: serie.first_air_date?.split("-")[0] || "Não informado",
    rating: safeRating(serie.vote_average),
  }));
};

// Função para formatar o DTO de Preview de série
export const SeriesPreviewDto = (data: any) => {
  return {
    mediaType: "series",
    id: data.id,
    name: data.name,
    poster: buildImageUrl(data.poster_path),
    seasons: data.number_of_seasons || 0,
    episodes: data.number_of_episodes || 0,
    duration: formatSeriesYears(data.first_air_date, data.last_air_date), // formata os anos de exibição da série
    rating: safeRating(data.vote_average),
    genres: safeMap(data.genres, (genre: any) => genre.name), // lista os gêneros da série
    overview: safeOverview(data.overview),
  };
};

// Função para formatar o DTO de Details de série
export const SeriesDetailsDto = (data: any) => {
  return {
    mediaType: "series",

    // Seção Info
    // Informações básicas para a seção de destaque de detalhes da série
    info: {
      id: data.id,
      name: data.name,
      poster: buildImageUrl(data.poster_path),
      duration: formatSeriesYears(data.first_air_date, data.last_air_date), // extrai apenas o ano da data de lançamento
      rating: safeRating(data.vote_average),
      genres: safeMap(data.genres, (genre: any) => genre.name), // lista os gêneros da série
      overview: safeOverview(data.overview),
    },

    // Seção Datasheet
    // Informações adicionais para a seção "Ficha Técnica"
    datasheet: {
      overview: safeOverview(data.overview),
      firstAirDate: formatDate(data.first_air_date),
      lastAirDate: formatDate(data.last_air_date),
      creator: safeMap(data.created_by, (creator: any) => creator.name), // lista os criadores da série
      languageOriginal: formatLanguage(data.original_language),
      originCountry: formatCountry(data.origin_country),
      type: formatSeriesType(data.type) || "Não informado",
      status: formatStatus(data.status),
      production: safeMap(data.production_companies, (company: any) => company.name),
      ageRating: getSeriesAgeRating(data.content_ratings),
      seasons: data.number_of_seasons || 0,
      episodes: data.number_of_episodes || 0,
      genres: safeMap(data.genres, (genre: any) => genre.name), // lista os gêneros da série
      episodeRuntime: formatEpisodeRuntime(data.episode_run_time),
    },

    // Seção Temporadas
    // Lista de temporadas da série para a seção de detalhes
    seasons: safeMap(data.seasons, (season: any) => ({
      mediaType: "season",
      id: season.id,
      name: season.name,
      poster: buildImageUrl(season.poster_path),
      episodes: season.episode_count || 0,
    })),

    // Seção Elenco
    cast: formatCast(data.credits?.cast), // formata o elenco principal da série

    // Seção Mídia
    // Imagens e vídeos relacionados a série
    media: {
      photos: {
        posters: formatImagesByType(data.images?.posters),
        backdrops: formatImagesByType(data.images?.backdrops),
      },
      videos: {
        trailers: formatVideosByType(data.videos?.results, "Trailer"),
        teasers: formatVideosByType(data.videos?.results, "Teaser"),
        clips: formatVideosByType(data.videos?.results, "Clip"),
        behindTheScenes: formatVideosByType(
          data.videos?.results,
          "Behind the Scenes",
        ),
        featurettes: formatVideosByType(data.videos?.results, "Featurette"), // featurettes = extras/especiais
      },
    },
  };
};

export const SeasonDetailsDto = (data: any) => {
  return {
    mediaType: "season",

    info: {
      id: data.id,
      name: data.name,
      seasonNumber: data.season_number || 0,
      poster: buildImageUrl(data.poster_path),
      airDate: formatDate(data.air_date),
      episodesCount: data.episodes?.length || 0,
      overview: safeOverview(data.overview),
    },

    episodes: safeMap(data.episodes, (episode: any) => ({
      id: episode.id,
      number: episode.episode_number || 0,
      name: data.name || `Episódio ${data.episode_number || ""}`.trim(),
    })),
  };
};

export const EpisodeDetailsDto = (data: any) => {
  const director = data.credits?.crew?.find(
    (person: any) => person.job === "Director",
  );

  const writer = data.credits?.crew?.find((person: any) => person.job === "Writer");

  return {
    info: {
      mediaType: "episode",
      id: data.id,
      banner: buildImageUrl(data.still_path),
      name: data.name || `Episódio ${data.episode_number}`,
      episodeNumber: data.episode_number || 0,
      seasonNumber: data.season_number || 0,
      airDate: formatDate(data.air_date),
      runtime: formatEpisodeRuntime(data.runtime),
      director: director ? director.name : "Não informado",
      writer: writer ? writer.name : "Não informado",
      overview: safeOverview(data.overview),
      rating: safeRating(data.vote_average),
    },

    // Seção Elenco Convidado
    guestStars: formatGuestStars(data.credits?.guest_stars), // formata os convidados do episódio
  };
};

