const express = require("express");
const router = express.Router();

const moviesController = require("./movies.controller");

router.get("/trending", moviesController.getTrendingMovies);
router.get("/popular", moviesController.getPopularMovies);
router.get("/top-rated", moviesController.getTopRatedMovies);
router.get("/upcoming", moviesController.getUpcomingMovies);

module.exports = router;