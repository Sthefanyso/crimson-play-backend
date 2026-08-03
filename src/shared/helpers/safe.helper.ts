export const safeString = (value: string | null | undefined, fallback = "Não informado") => {
  return value ? value : fallback;
};

export const safeOverview = (value: string | null | undefined) => {
  return value || "Sinopse não disponível.";
};

export const safeRating = (value: number | null | undefined) => {
  return value ? Number(value.toFixed(1)) : 0;
};

export const safeMap = (value: any[] | null | undefined, callback: (item: any) => any) => {
  if (!Array.isArray(value) || value.length === 0) return [];
  return value.map(callback);
};

