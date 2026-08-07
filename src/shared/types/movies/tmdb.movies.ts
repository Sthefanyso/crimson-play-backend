import { TMDBGenre, TMDBCredits, TMDBCompany, TMDBImage, TMDBVideo} from "../tmdb.types";

export interface TMDBMovieList {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string | null;
  vote_average: number | null;
}

export interface TMDBMoviePreview {
  mediaType: "movie";
  id: number;
  title: string;
  poster_path: string | null;
  credits: string | null;
  runtime: number | null;
  release_date: string | null;
  vote_average: number | null;
  genres: TMDBGenre[] | null;
  overview: string | null;
}


export interface TMDBMovieDetails {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string | null;
  credits: TMDBCredits;
  runtime: number | null;
  vote_average: number | null;
  genres: TMDBGenre[];
  overview: string | null;
  status: string | null;
  title_original: string | null;
  production_companies: TMDBCompany[];
  age_rating: string | null;
  language_original: string | null;
  budget: number | null;
  revenue: number | null;

   images: {
    posters: TMDBImage[];
    backdrops: TMDBImage[];
  };

  videos: {
    results: TMDBVideo[];
  };
}

