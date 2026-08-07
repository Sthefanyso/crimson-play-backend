import { TMDBCompany, TMDBGenre } from "../tmdb.types";

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
  last_air_date: string | null;
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
} 
    
export interface TMDBSeasons{
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string | null;
  poster_path: string | null;
  season_number: number;
}

export interface TMDBEpisode{
  air_date: string | null;
  episode_number: number;
  id: number;
  name: string;
  overview: string | null;
  still_path: string | null;
  vote_average: number | null;
}