const { fetchTmdbData } = require("./movies.client");

const {
  buildImageUrl,
  formatImagesByType,
  formatVideosByType,
  getDirector,
  getAgeRating,
} = require("./movies.helper");

// Helpers de formatação de dados (DTOs) para os endpoints relacionados a filmes
// Helper de DTO para lista de filmes (cards da home)
const formatMovieList = (movies) => {
  return {
    filmes: movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: buildImageUrl(movie.poster_path),
      year: movie.release_date?.split("-")[0], // extrai apenas o ano da data de lançamento
      rating: Number(movie.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
    })),
  };
};

// Sequência de requisições para os endpoints de listas de filmes que formarão a home movie do site
// req para trazer os filmes em tendência
exports.getTrendingMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// req para trazer os filmes populares
exports.getPopularMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// req para trazer os filmes com melhor avaliação
exports.getTopRatedMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// req para trazer os filmes que ainda serão lançados
exports.getUpcomingMovies = async () => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`,
  );

  return formatMovieList(data.results || []);
};

// Preview de um filme específico, informações básicas
exports.getMoviePreview = async (movieId) => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=pt-BR&append_to_response=credits`,
  );

  return {
    mediaType: "movie",
    id: data.id,
    title: data.title,
    poster: buildImageUrl(data.poster_path),
    director: getDirector(data.credits),
    duration: data.runtime,
    year: data.release_date?.split("-")[0], // extrai apenas o ano da data de lançamento
    rating: Number(data.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
    genres: (data.genres || []).map((genre) => genre.name).join(", "), // lista os gêneros separados por vírgula
    overview: data.overview,
  };
};

// Detalhes de um filme específico, informações completas
exports.getMovieDetails = async (movieId) => {
  const data = await fetchTmdbData(
    `${process.env.TMDB_BASE_URL}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=pt-BR&append_to_response=credits,images,videos,release_dates&include_image_language=en,null`,
  ); // usa o recurso append_to_response para trazer elenco, imagens e videos relacionados ao filme, e include_image_language para trazer mais imagens, em inglês e sem filtro de idioma, não apenas as imagens em português.

  return {
    mediaType: "movie",

    // informações básicas para a seção de destaque do detalhe do filme
    info: {
      id: data.id,
      title: data.title,
      poster: buildImageUrl(data.poster_path),
      year: data.release_date?.split("-")[0], // extrai apenas o ano da data de lançamento
      director: getDirector(data.credits),
      duration: data.runtime,
      rating: Number(data.vote_average.toFixed(1)), // arredonda a nota para 1 casa decimal
      overview: data.overview,
    },

    // informações adicionais para a seção "Ficha Técnica" do detalhe do filme
    datasheet: {
      releaseDate: data.release_date, // data de lançamento completa
      status: data.status, // status do filme (ex: "Released", "Post Production", etc.)
      title: data.title,
      titleOriginal: data.original_title,
      director: getDirector(data.credits),
      production: data.production_companies
        .map((company) => company.name)
        .join(", "), // lista as produtoras separadas por vírgula
      duration: data.runtime,
      ageRating: getAgeRating(data.release_dates),
      language: data.original_language,
      genres: (data.genres || []).map((genre) => genre.name).join(", "), // lista os gêneros separados por vírgula
      budget: data.budget,
      revenue: data.revenue,
    },

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
          "Behind the Scenes"
        ),
        featurettes: formatVideosByType(data.videos?.results || [], "Featurette"), // featurettes = extras/especiais
      },
    },
  };
};
