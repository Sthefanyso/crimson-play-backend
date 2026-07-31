import { Router } from "express";
import * as seriesController from "./series.controller.js";

const router = Router();

router.get("/trending", seriesController.getTrendingSeries);
router.get("/on-the-air", seriesController.getOnTheAirSeries);
router.get("/popular", seriesController.getPopularSeries);
router.get("/top-rated", seriesController.getTopRatedSeries);
router.get("/preview/:seriesId", seriesController.getSeriesPreview);
router.get("/details/:seriesId", seriesController.getSeriesDetails);
router.get("/:seriesId/recommendations", seriesController.getSeriesRecommendations);
router.get("/:seriesId/seasons/:seasonNumber/episodes/:episodeNumber", seriesController.getEpisodeDetails);
router.get("/:seriesId/seasons/:seasonNumber", seriesController.getSeasonDetails);

export default router;