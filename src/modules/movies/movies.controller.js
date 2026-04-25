const moviesService = require("./movies.service");


exports.getTrendingMovies = async (req, res) => {
  try {
    const data = await moviesService.getTrendingMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

exports.getPopularMovies = async (req, res) => {
  try {
    const data = await moviesService.getPopularMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

exports.getTopRatedMovies = async (req, res) => {
  try {
    const data = await moviesService.getTopRatedMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

exports.getUpcomingMovies = async (req, res) => {
  try {
    const data = await moviesService.getUpcomingMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

exports.getMoviePreview = async (req, res) => {
  try {
    const { movieId } = req.params;
    const data = await moviesService.getMoviePreview(movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar preview do filme" });
  }
};

exports.getMovieDetails = async (req, res) => {
  try {
    const { movieId } = req.params;
    const data = await moviesService.getMovieDetails(movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar detalhes do filme" });
  }
};

exports.getMovieRecommendations = async (req, res) => {
  try {
    const { movieId } = req.params;
    const data = await moviesService.getMovieRecommendations(movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar recomendações" });
  }
};