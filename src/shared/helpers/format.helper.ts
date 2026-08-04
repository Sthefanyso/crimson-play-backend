// Helpers de formatação de campos (runtime, date, status, currency)
export const formatRuntime = (minutes: number | null | undefined) => {
  if (!minutes) return "Não informado";

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${h}h ${m}min`;
};

export const formatDate = (date: string | null | undefined) => {
  if (!date) return "Não informado";

  return new Date(date).toLocaleDateString("pt-BR");
};

export const formatStatus = (status: string | null | undefined): string => {
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

  return statusMap[status] ?? status;
};

export const formatCurrency = (value: number | null | undefined): string => {
  if (!value) return "Não informado";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  });
};

export const formatLanguage = (langCode: string | null | undefined): string => {
  if (!langCode) return "Não informado";

  const name = new Intl.DisplayNames(["pt-BR"], {
    type: "language",
  }).of(langCode);

  if (!name) return "Não informado";

  return name[0].toUpperCase() + name.slice(1);
};

export const formatCountry = (countries: string[] = []): string[] | string => {
    if (countries.length === 0) {
    return "Não informado";
  }

  const formatter = new Intl.DisplayNames(["pt-BR"], {
    type: "region",
  });

  const result = countries
    .map((code) => formatter.of(code))
    .filter((country): country is string => country !== undefined);

  return result.length > 0 ? result : "Não informado";

};
