const safeString = (value, fallback = "Não informado") => {
  return value ? value : fallback;
};

const safeOverview = (value) => {
  return value || "Sinopse não disponível.";
};

const safeRating = (value) => {
  return value ? Number(value.toFixed(1)) : 0;
};

const safeMap = (value, callback) => {
  if (!Array.isArray(value) || value.length === 0) return [];
  return value.map(callback);
};

module.exports = {
  safeString,
  safeOverview,
  safeRating,
  safeMap,
};
