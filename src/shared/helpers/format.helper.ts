// Helpers de formatação de campos (runtime, date, status, currency)
export const formatRuntime = (minutes: number | null | undefined) => {
  if (!minutes) return "Não informado";

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${h}h ${m}min`;
};

export const formatDate = (date: Date | null | undefined) => {
  if (!date) return "Não informado";

  return new Date(date).toLocaleDateString("pt-BR");
};

export const formatStatus = (status: string | null | undefined) => {
  if (!status) return "Não informado";

  const statusMap: Record<string, string> = {
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

export const formatCurrency = (value: number | null | undefined) => {
  if (!value) return "Não informado";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  });
};

export const formatLanguage = (langCode: string | null | undefined) => {
  if (!langCode) return "Não informado";

  const name = new Intl.DisplayNames(["pt-BR"], {
    type: "language",
  }).of(langCode);

  if (!name) return "Não informado";

  return name[0].toUpperCase() + name.slice(1);
};

export const formatCountry = (countries: string[] = []) => {
    if (!Array.isArray(countries) || countries.length === 0) {
    return "Não informado";
  }

  const formatter = new Intl.DisplayNames(["pt-BR"], {
    type: "region",
  });

  return countries.map((code) => formatter.of(code));
};
