export type MovieParams = {
    movieId: string;
};

export type SeriesParams = {
    seriesId: string;
};

export type SeasonParams = {
    seriesId: string;
    seasonNumber: string;
};

export type EpisodeParams = {
    seriesId: string;
    seasonNumber: string;
    episodeNumber: string;
};