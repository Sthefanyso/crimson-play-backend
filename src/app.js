const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rota de teste
app.get("/", (req, res) => {
  res.json({ message: "API do TMDB conectada ao Crimson Play, funcionou! 🚀" });
});

const moviesRoutes = require("./modules/movies/movies.routes");
const seriesRoutes = require("./modules/series/series.routes");

app.use("/api/movies", moviesRoutes);
app.use("/api/series", seriesRoutes);

module.exports = app;