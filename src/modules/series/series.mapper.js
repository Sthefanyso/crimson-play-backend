// Importa as funções auxiliares de formatação de dados
const {
  buildImageUrl,
  formatImagesByType,
  formatVideosByType,
} = require("../../shared/helpers/media.helper");

const {
  formatDate,
  formatStatus,
  formatLanguage,
  formatCountry,
} = require("../../shared/helpers/format.helper");

const {
  formatSeriesYears,
  formatSeriesType,
  formatEpisodeRuntime,
  getSeriesAgeRating,
} = require("./series.helper");

const { formatCast, formatGuestStars } = require("../../shared/helpers/cast.helper");

// Função para formatar o DTO de lista de séries
const formatSeriesList = (series = []) => {
  return series.map((serie) => ({
    mediaType: "series",
    id: serie.id,
    name: serie.name,
    poster: buildImageUrl(serie.poster_path),
    year: serie.first_air_date?.split("-")[0] || "Não informado",
    rating: serie.vote_average ? Number(serie.vote_average.toFixed(1)) : 0,
  }));
};

// Função para formatar o DTO de Preview de série
const SeriesPreviewDto = (data) => {
  return {
    mediaType: "series",
    id: data.id,
    name: data.name,
    poster: buildImageUrl(data.poster_path),
    seasons: data.number_of_seasons,
    episodes: data.number_of_episodes,
    duration: formatSeriesYears(data.first_air_date, data.last_air_date), // formata os anos de exibição da série
    rating: Number(data.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
    genres: (data.genres || []).map((genre) => genre.name), // lista os gêneros da série
    overview: data.overview,
  };
};

// Função para formatar o DTO de Details de série
const SeriesDetailsDto = (data) => {
  return {
    mediaType: "series",

    // Seção Info
    // Informações básicas para a seção de destaque de detalhes da série
    info: {
      id: data.id,
      name: data.name,
      poster: buildImageUrl(data.poster_path),
      duration: formatSeriesYears(data.first_air_date, data.last_air_date), // extrai apenas o ano da data de lançamento
      rating: Number(data.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
      genres: (data.genres || []).map((genre) => genre.name),
      overview: data.overview,
    },

    // Seção Datasheet
    // Informações adicionais para a seção "Ficha Técnica"
    datasheet: {
      overview: data.overview,
      firstAirDate: formatDate(data.first_air_date),
      lastAirDate: formatDate(data.last_air_date),
      creator: (data.created_by || []).map((creator) => creator.name),
      languageOriginal:
        formatLanguage(data.original_language) || "Não informado",
      originCountry: formatCountry(data.origin_country) || [],
      type: formatSeriesType(data.type) || "Não informado",
      status: formatStatus(data.status) || "Não informado",
      production: (data.production_companies || []).map(
        (company) => company.name,
      ),
      ageRating: getSeriesAgeRating(data.content_ratings),
      seasons: data.number_of_seasons || 0,
      episodes: data.number_of_episodes || 0,
      genres: (data.genres || []).map((genre) => genre.name),
      episodeRuntime:
        formatEpisodeRuntime(data.episode_run_time) || "Não informado",
    },

    // Seção Temporadas
    // Lista de temporadas da série para a seção de detalhes
    seasons: (data.seasons || []).map((season) => ({
      mediaType: "season",
      id: season.id,
      name: season.name,
      poster: buildImageUrl(season.poster_path),
      episodes: season.episode_count,
  })),  

  cast:{
      cast: formatCast(data.credits?.cast || []), // formata o elenco principal da série
  },

    // Seção Mídia
    // Imagens e vídeos relacionados a série
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
}

const SeasonDetailsDto = (data) => {
  return {
    mediaType: "season",

    info: {
      id: data.id,
      name: data.name,
      seasonNumber: data.season_number,
      poster: buildImageUrl(data.poster_path),
      airDate: formatDate(data.air_date),
      episodesCount: data.episodes?.length || 0,
      overview: data.overview || "Sinopse não disponível.",
    },

    episodes: (data.episodes || []).map((episode) => ({
      id: episode.id,
      number: episode.episode_number,
      name: episode.name || `Episódio ${episode.episode_number}`,
    })),
  };
};


const EpisodeDetailsDto = (data) => {

   const director = data.credits?.crew?.find(
    (person) => person.job === "Director"
  );

  const writer = data.credits?.crew?.find(
    (person) => person.job === "Writer"
  );

  return {

    info:{
    mediaType: "episode",
    id: data.id,
    banner: buildImageUrl(data.still_path),
    number: data.episode_number,
    name: data.name,
    episodeNumber: data.episode_number,
    seasonNumber: data.season_number,
    airDate: formatDate(data.air_date),
    runtime: formatEpisodeRuntime(data.runtime) || "Não informado",
    director: director ? director.name : "Não informado",
    writer: writer ? writer.name : "Não informado",
    overview: data.overview || "Sinopse não disponível.",
    rating: data.vote_average ? Number(data.vote_average.toFixed(1)) : 0,
  },

    cast:{
      cast: formatGuestStars(data.credits?.guest_stars || []), // formata os convidados do episódio
    },
  };
};

module.exports = {
  formatSeriesList,
  SeriesPreviewDto,
  SeriesDetailsDto,
  SeasonDetailsDto,
  EpisodeDetailsDto,
}
