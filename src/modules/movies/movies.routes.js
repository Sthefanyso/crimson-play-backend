const express = require("express");
const router = express.Router();

const moviesController = require("./movies.controller");

router.get("/popular", moviesController.getPopularMovies);

module.exports = router;