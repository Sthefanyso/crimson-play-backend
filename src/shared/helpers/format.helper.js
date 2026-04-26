// Helpers de formatação de campos (runtime, date, status, currency)
const formatRuntime = (minutes) => {
  if (!minutes) return null;

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${h}h ${m}min`;
};

const formatDate = (date) => {
  if (!date) return null;

  return new Date(date).toLocaleDateString("pt-BR");
};

const formatStatus = (status) => {
  const statusMap = {
    Released: "Lançado",
    "Post Production": "Pós-produção",
    InProduction: "Em produção",
    Planned: "Planejado",
  };

  return statusMap[status] || status;
};

const formatCurrency = (value) => {
  if (!value) return null;

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  });
};

module.exports = {
  formatRuntime,
  formatDate,
  formatStatus,
  formatCurrency,
};