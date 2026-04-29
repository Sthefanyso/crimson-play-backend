const seriesService = require("./series.service");

exports.getTrendingSeries = async (req, res) => {
  try {
    const data = await seriesService.getTrendingSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

exports.getOnTheAirSeries = async (req, res) => {
  try {
    const data = await seriesService.getOnTheAirSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

exports.getPopularSeries = async (req, res) => {
  try {
    const data = await seriesService.getPopularSeries();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

exports.getTopRatedSeries = async (req, res) => {
  try {
    const data = await seriesService.getTopRatedSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

exports.getSeriesPreview = async (req, res) => {
  try {
    const { seriesId } = req.params;
    const data = await seriesService.getSeriesPreview(seriesId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar detalhes da série" });
  }
};

exports.getSeriesDetails = async (req, res) => {
  try {
    const { seriesId } = req.params;
    const data = await seriesService.getSeriesDetails(seriesId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar detalhes da série" });
  }
};

exports.getSeriesRecommendations = async (req, res) => {
  try {
    const { seriesId } = req.params;
    const data = await seriesService.getSeriesRecommendations(seriesId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar recomendações" });
  }
};