import { TMDBCompany, TMDBGenre, TMDBImage, TMDBVideo, TMDBCredits, TMDBCrew, TMDBCast, TMDBGuestStars } from "../tmdb.types";

export interface TMDBSeriesList {
  id: number;
  name: string;
  poster_path: string | null;
  first_air_date: string | null;
  vote_average: number | null;
}

export interface TMDBSeriesPreview {
  mediaType: "series";
  id: number;
  name: string;
  poster_path: string | null;
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  first_air_date: string | null;
  last_air_date: string | null;
  vote_average: number | null;
  genres: TMDBGenre[] | null;
  overview: string | null;
}

export interface TMDBSeriesDetails {
  id: number;
  name: string;
  poster_path: string | null;
  first_air_date: string | null;
  last_air_date: string | null
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  vote_average: number | null;
  genres: TMDBGenre[];
  overview: string | null;
  status: string | null;
  original_language: string | null;
  production_companies: TMDBCompany[];
  episode_run_time: number[] | null;
  content_ratings: {
    results: {
      iso_3166_1: string;
      rating: string;
    }[];
  };
  created_by: {
    id: number;
    name: string;
    profile_path: string | null;
  }[];
  origin_country: string[];
  type: string | null;
  seasons: TMDBSeasons[];
  episodes: TMDBEpisode[];
  credits: TMDBEpisodeCredits;
  images: TMDBImages;
  videos: TMDBVideos;
}

export interface TMDBSeasons {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string | null;
  poster_path: string | null;
  season_number: number;
}

export interface TMDBSeason {
  id: number;
  name: string;
  season_number: number;
  episode_number: number;
  poster_path: string | null;
  episode_count: number | null;
  overview: string | null;
  episodes: TMDBEpisode[];
  air_date: string | null;
}

export interface TMDBEpisode {
  air_date: string | null;
  episode_number: number;
  season_number: number;
  runtime: number | null;
  id: number;
  name: string;
  overview: string | null;
  still_path: string | null;
  vote_average: number | null;
  credits?: TMDBEpisodeCredits;  
}

// Interfaces de mídia que compõe a TMDBSeriesDetails 
export interface TMDBImages {
  posters: TMDBImage[];
  backdrops: TMDBImage[];
}

export interface TMDBVideos {
  trailers: TMDBVideo[];
  teasers: TMDBVideo[];
  clips: TMDBVideo[];
  behindTheScenes: TMDBVideo[];
  featurettes: TMDBVideo[];
  results: TMDBVideo[];
}

export interface TMDBEpisodeCredits {
  cast: TMDBCast[];
  crew: TMDBCrew[];
  guest_stars: TMDBGuestStars[];
}