// Importa as interfaces 
import { TMDBGenre, TMDBCompany, TMDBMovieDetails } from "../../shared/types/tmdb.types";
import { TMDBMovieList, TMDBMoviePreview, MovieDetails} from "../../shared/types/movies.types";

// Importa as funções auxiliares de formatação de dados
import { getDirector, getAgeRating} from "./movies.helper";

import { buildImageUrl, formatImagesByType, formatVideosByType} from "../../shared/helpers/media.helper";

// Importa as funções auxiliares de formatação de campos
import {
  formatRuntime,
  formatDate,
  formatStatus,
  formatCurrency,
  formatLanguage
} from "../../shared/helpers/format.helper";

import { formatCast } from "../../shared/helpers/cast.helper";

import { 
  safeOverview,
  safeRating,
  safeMap } from "../../shared/helpers/safe.helper";

// Função para formatar a lista de filmes
export const formatMovieList = (movies: TMDBMovieList[] = []) => {
  return {
    filmes: movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: buildImageUrl(movie.poster_path),
      year: (movie.release_date?.split("-")[0]) || "Não informado", // extrai apenas o ano da data de lançamento
      rating: safeRating(movie.vote_average),
    })),
  };
};

// Função para formatar o DTO de Preview
export const MoviePreviewDto = (data: TMDBMoviePreview) => {
  return {
    mediaType: "movie",
    id: data.id,
    title: data.title,
    poster: buildImageUrl(data.poster_path),
    director: getDirector(data.credits),
    duration: formatRuntime(data.runtime),
    year: (data.release_date?.split("-")[0]) || "Não informado", // extrai apenas o ano da data de lançamento
    rating: safeRating(data.vote_average),
    genres: safeMap(data.genres, (genre: TMDBGenre) => genre.name), // lista os gêneros do filme
    overview: safeOverview(data.overview),
  };
};

// Função para formatar o DTO de Details
export const MovieDetailsDto = (data: TMDBMovieDetails) => {
  return {
    mediaType: "movie",

    // Seção Info
    // Informações básicas para a seção de destaque de detalhes do filme
    info: {
      id: data.id,
      title: data.title,
      poster: buildImageUrl(data.poster_path),
      year: (data.release_date?.split("-")[0]) || "Não informado", // extrai apenas o ano da data de lançamento
      director: getDirector(data.credits),
      duration: formatRuntime(data.runtime),
      rating: safeRating(data.vote_average),
      genres: safeMap(data.genres, (genre: TMDBGenre) => genre.name), // lista os gêneros do filme
      overview: safeOverview(data.overview),
    },

    // Seção Datasheet
    // Informações adicionais para a seção "Ficha Técnica"
    datasheet: {
      releaseDate: formatDate(data.release_date), // data de lançamento completa
      status: formatStatus(data.status), // status do filme (ex: "Released", "Post Production", etc.)
      title: data.title,
      titleOriginal: (data.title_original) || "Título original não disponível",
      director: getDirector(data.credits),
      production: safeMap(data.production_companies, (company: TMDBCompany) => company.name).join(", ") || "Não informado", // lista as produtoras separadas por vírgula
      duration: formatRuntime(data.runtime),
      ageRating: getAgeRating(data.release_date),
      languageOriginal: formatLanguage(data.language_original),
      genres: safeMap(data.genres, (genre: TMDBGenre) => genre.name).join(", ") || "Não informado", // lista os gêneros separados por vírgula
      currency: "USD",
      budget: formatCurrency(data.budget),
      revenue: formatCurrency(data.revenue),
    },

    // Seção Elenco
    cast: formatCast(data.credits?.cast), // formata o elenco principal do filme,

    // Seção Mídia
    // Imagens e vídeos relacionados ao filme
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
        featurettes: formatVideosByType(
          data.videos?.results,
          "Featurette",
        ), // featurettes = extras/especiais
      },
    },
  };
};
