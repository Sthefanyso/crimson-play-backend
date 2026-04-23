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
