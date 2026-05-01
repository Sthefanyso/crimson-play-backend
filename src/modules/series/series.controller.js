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

exports.getSeasonDetails = async (req, res) => {
  try {
    const { seriesId, seasonNumber } = req.params;

    const data = await seriesService.getSeasonDetails(seriesId, seasonNumber);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar temporada" });
  }
};

exports.getEpisodeDetails = async (req, res) => {
  try {
    const { seriesId, seasonNumber, episodeNumber } = req.params;
    const data = await seriesService.getEpisodeDetails(
      seriesId,
      seasonNumber,
      episodeNumber,
    );
    res.json(data);
  } catch (error) {
    console.error("ERRO REAL EPISODE:", error);

    res.status(500).json({ error: "Erro ao buscar episódio" });
  }
};
