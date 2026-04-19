exports.getPopularMovies = async () => {
  const response = await fetch(
    `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`
  );

  const data = await response.json();
  return data;
};

