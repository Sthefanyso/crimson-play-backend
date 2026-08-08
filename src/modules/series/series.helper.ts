// Função para formatar os anos de exibição de uma série
export const formatSeriesYears = (firstAirDate: string | null | undefined, lastAirDate: string | null | undefined) => {
  const startYear = firstAirDate?.split("-")[0];

  if (!startYear) return "Não informado";

  const endYear = lastAirDate?.split("-")[0];

  if (!endYear) return `${startYear} - Atual`;

  return `${startYear} - ${endYear}`;
};

// Função para mapear o tipo de série para português
export const formatSeriesType = (type: string | null |undefined) => {
  if (!type) return "Não informado";

  const typeMap: Record<string, string> = {
    Scripted: "Roteirizada",
    Reality: "Reality Show",
    Documentary: "Documentário",
    News: "Notícias",
    "Talk Show": "Talk Show",
    Miniseries: "Minissérie",
  };

  return typeMap[type] || type;
};

// Função para formatar o tempo de duração de um episódio
export const formatEpisodeRuntime = (episodeRunTime: number | number[] | null | undefined) => {
  const runtime = Array.isArray(episodeRunTime) ? episodeRunTime[0] : episodeRunTime;

  if (!runtime) return "Não informado";

  return `${runtime} min`;
};

// Função para obter a classificação indicativa de uma série, priorizando a classificação brasileira (BR) e, se não disponível, a classificação americana (US), se não tiver a informação, retorna "Não informado"
export const getSeriesAgeRating = (contentRatings: any) => {
  const results = contentRatings?.results || [];

  const br = results.find((c: any) => c.iso_3166_1 === "BR");
  const us = results.find((c: any) => c.iso_3166_1 === "US");

  return br?.rating || us?.rating || "Não informado";
};
