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

export interface TMDBCast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order?: number;
}

export interface TMDBGuestStars {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order?: number;
  credit_id: string;
  episode_count: number;
}

// interface de companias
export interface TMDBCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}
