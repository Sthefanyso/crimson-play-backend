// Helpers de informações do filme
// Extrai informações específicas (diretor e classificação indicativa)
export const getDirector = (credits: any) => {
  return (
    credits?.crew.find((member: any) => member.job === "Director")?.name ||
    "Desconhecido"
  );
};

// Função para obter a classificação indicativa de um filme, priorizando a classificação brasileira (BR) e, 
// se não disponível, a classificação americana (US), se não tiver a informação, retorna "Não informado"
export const getAgeRating = (releaseDates: any) => {
  const certificationData = releaseDates?.results;

  const br = certificationData?.find((c: any) => c.iso_3166_1 === "BR");
  const us = certificationData?.find((c: any) => c.iso_3166_1 === "US");

  const getCertification = (country: any) =>
    country?.release_dates.find((release: any) => release.certification)
      ?.certification;

  return getCertification(br) || getCertification(us) || "Não informado";
};

