import * as seriesService from "./series.service";
import { Request, Response } from "express";
import { SeriesParams, SeasonParams, EpisodeParams } from "../../shared/types/params.types";

export const getTrendingSeries = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await seriesService.getTrendingSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

export const getOnTheAirSeries = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await seriesService.getOnTheAirSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

export const getPopularSeries = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await seriesService.getPopularSeries();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

export const getTopRatedSeries = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await seriesService.getTopRatedSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar séries" });
  }
};

export const getSeriesPreview = async (
  req: Request<SeriesParams>,
  res: Response
) => {
  try {
    const { seriesId } = req.params;
    const data = await seriesService.getSeriesPreview(seriesId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar detalhes da série" });
  }
};

export const getSeriesDetails = async (
  req: Request<SeriesParams>,
  res: Response
) => {
  try {
    const { seriesId } = req.params;
    const data = await seriesService.getSeriesDetails(seriesId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar detalhes da série" });
  }
};

export const getSeriesRecommendations = async (
  req: Request<SeriesParams>,
  res: Response
) => {
  try {
    const { seriesId } = req.params;
    const data = await seriesService.getSeriesRecommendations(seriesId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar recomendações" });
  }
};

export const getSeasonDetails = async (
  req: Request<SeasonParams>,
  res: Response
) => {
  try {
    const { seriesId, seasonNumber } = req.params;

    const data = await seriesService.getSeasonDetails(seriesId, seasonNumber);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar temporada" });
  }
};

export const getEpisodeDetails = async (req: Request<EpisodeParams>, res: Response) => {
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
