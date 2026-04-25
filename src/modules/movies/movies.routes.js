const express = require("express");
const router = express.Router();

const moviesController = require("./movies.controller");

router.get("/trending", moviesController.getTrendingMovies);
router.get("/popular", moviesController.getPopularMovies);
router.get("/top-rated", moviesController.getTopRatedMovies);
router.get("/upcoming", moviesController.getUpcomingMovies);
router.get("/preview/:movieId", moviesController.getMoviePreview);
router.get("/details/:movieId", moviesController.getMovieDetails);
router.get("/:movieId/recommendations", moviesController.getMovieRecommendations);


module.exports = router;