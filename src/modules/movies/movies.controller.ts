import * as moviesService from "./movies.service";
import { Request, Response } from "express";
import { MovieParams } from "../../shared/types/params.types";

export const getTrendingMovies = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await moviesService.getTrendingMovies();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

export const getPopularMovies = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await moviesService.getPopularMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

export const getTopRatedMovies = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await moviesService.getTopRatedMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

export const getUpcomingMovies = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await moviesService.getUpcomingMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

export const getMoviePreview = async (
  req: Request<MovieParams>,
  res: Response
) => {
  try {
    const { movieId } = req.params;
    const data = await moviesService.getMoviePreview(movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar preview do filme" });
  }
};

export const getMovieDetails = async (
  req: Request<MovieParams>,
  res: Response
) => {
  try {
    const { movieId } = req.params;
    const data = await moviesService.getMovieDetails(movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar detalhes do filme" });
  }
};

export const getMovieRecommendations = async (
  req: Request<MovieParams>,
  res: Response
) => {
  try {
    const { movieId } = req.params;
    const data = await moviesService.getMovieRecommendations(movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar recomendações" });
  }
};