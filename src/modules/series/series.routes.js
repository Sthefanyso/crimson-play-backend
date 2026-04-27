const express = require("express");
const router = express.Router();

const seriesController = require("./series.controller");


router.get("/trending", seriesController.getTrendingSeries);
router.get("/on-the-air", seriesController.getOnTheAirSeries);
router.get("/popular", seriesController.getPopularSeries);
router.get("/top-rated", seriesController.getTopRatedSeries);
router.get("/preview/:seriesId", seriesController.getSeriesPreview);


module.exports = router;