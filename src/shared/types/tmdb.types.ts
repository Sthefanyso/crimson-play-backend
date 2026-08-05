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
