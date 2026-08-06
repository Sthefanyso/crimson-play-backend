export const safeOverview = (value: string | null | undefined): string => {
  return value || "Sinopse não disponível.";
};

export const safeRating = (value: number | null | undefined): number => {
  return value == null ? 0 : Number(value.toFixed(1));
};

export const safeMap = <T, R>(
  value: T[] | null | undefined,
  callback: (item: T) => R
): R[] => {
  if (!value?.length) return [];

  return value.map(callback);
};

