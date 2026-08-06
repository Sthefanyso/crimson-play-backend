// interface de atores
export interface TMDBActor {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order?: number;
}

// interfaces de imagens e vídeos
export interface TMDBImage {
  file_path: string | null;
}

export interface TMDBVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

// interface de genero cinematográfico

export interface TMDBGenre {
  id: number;
  name: string;
}

// interface de créditos
export interface TMDBCredits {
  cast: TMDBActor[];
  crew: TMDBCrew[];
}

export interface TMDBCrew {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

// interface de companias
export interface TMDBCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
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

