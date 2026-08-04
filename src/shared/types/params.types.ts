export interface MovieParams {
    movieId: string;
};

export interface SeriesParams {
    seriesId: string;
};

export interface SeasonParams {
    seriesId: string;
    seasonNumber: string;
};

export interface EpisodeParams {
    seriesId: string;
    seasonNumber: string;
    episodeNumber: string;
};