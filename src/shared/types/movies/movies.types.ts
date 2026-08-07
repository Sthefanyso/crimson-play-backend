import { TMDBGenre } from "../tmdb.types";

export interface MovieDetails {
  mediaType: "movie";
  info: MovieInfo;
  datasheet: MovieDatasheet;
  cast: MovieCast[];
}

export interface MovieInfo {
  id: number;
  title: string;
  poster: string | null;
  releaseDate: string | null;
  credits: string | null;
  runtime: number | null;
  voteAverage: number | null;
  genres: TMDBGenre[] | null;
  overview: string | null;
}

export interface MovieDatasheet {
  releaseDate: string | null;
  status: string | null;
  title: string;
  titleOriginal: string | null;
  credits: string | null;
  productionCompanies: string[] | null;
  runtime: number | null;
  ageRating: string | null;
  language: string | null;
  genres: TMDBGenre[] | null;
  currency: string | null;
  budget: number | null;
  revenue: number | null;
}

export interface MovieCast {
  id: number;
  name: string;
  character: string;
  profile: string | null;
  role: string;
}

export interface MovieMedia {
  photos: MoviePhotos;
  videos: MovieVideos;
}

export interface FormattedImage {
  url: string | null;
}

export interface MoviePhotos {
  posters: FormattedImage[];
  backdrops: FormattedImage[];
}

export interface FormattedVideo {
  id: string;
  name: string;
  key: string;
  url: string;
}

export interface MovieVideos {
  trailers: FormattedVideo[];
  teasers: FormattedVideo[];
  clips: FormattedVideo[];
  behindTheScenes: FormattedVideo[];
  featurettes: FormattedVideo[];
}