const moviesService = require("./movies.service");

exports.getPopularMovies = async (req, res) => {
  try {
    const data = await moviesService.getPopularMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

