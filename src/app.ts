import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import moviesRoutes from "./modules/movies/movies.routes";
import seriesRoutes from "./modules/series/series.routes";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API do TMDB conectada ao Crimson Play, funcionou!",
  });
});

app.use("/api/movies", moviesRoutes);
app.use("/api/series", seriesRoutes);

export default app;