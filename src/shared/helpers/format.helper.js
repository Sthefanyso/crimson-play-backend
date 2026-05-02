// Helpers de formatação de campos (runtime, date, status, currency)
const formatRuntime = (minutes) => {
  if (!minutes) return "Não informado";

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${h}h ${m}min`;
};

const formatDate = (date) => {
  if (!date) return "Não informado";

  return new Date(date).toLocaleDateString("pt-BR");
};

const formatStatus = (status) => {
  if (!status) return "Não informado";

  const statusMap = {
    // Movies
    Released: "Lançado",
    "Post Production": "Pós-produção",
    Planned: "Planejado",
    Canceled: "Cancelado",

    // Series
    "Returning Series": "Em exibição",
    Ended: "Finalizada",
    "In Production": "Em produção",
  };

  return statusMap[status] || status;
};

const formatCurrency = (value) => {
  if (!value) return "Não informado";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  });
};

const formatLanguage = (langCode) => {
  if (!langCode) return "Não informado";

  const name = new Intl.DisplayNames(["pt-BR"], {
    type: "language",
  }).of(langCode);

  if (!name) return "Não informado";

  return name[0].toUpperCase() + name.slice(1);
};

const formatCountry = (countries = []) => {
    if (!Array.isArray(countries) || countries.length === 0) {
    return "Não informado";
  }

  const formatter = new Intl.DisplayNames(["pt-BR"], {
    type: "region",
  });

  return countries.map((code) => formatter.of(code));
};

module.exports = {
  formatRuntime,
  formatDate,
  formatStatus,
  formatCurrency,
  formatLanguage,
  formatCountry,
};
