export const safeOverview = (value: string | null | undefined): string => {
  return value || "Sinopse não disponível.";
};

export const safeRating = (value: number | null | undefined): number => {
  return value == null ? 0 : Number(value.toFixed(1));
};

export const safeMap = (value: any[] | null | undefined, callback: (item: any) => any) => {
  if (!Array.isArray(value) || value.length === 0) return [];
  return value.map(callback);
};


