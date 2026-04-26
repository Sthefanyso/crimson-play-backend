// Helpers de informações do filme
// Extrai informações específicas (diretor e classificação indicativa)
const getDirector = (credits) => {
  return (
    credits?.crew.find((member) => member.job === "Director")?.name ||
    "Desconhecido"
  );
};

const getAgeRating = (releaseDates) => {
  const certificationData = releaseDates?.results;

  const br = certificationData?.find((c) => c.iso_3166_1 === "BR");
  const us = certificationData?.find((c) => c.iso_3166_1 === "US");

  const getCertification = (country) =>
    country?.release_dates.find((release) => release.certification)
      ?.certification;

  return getCertification(br) || getCertification(us) || "Não informado";
};


module.exports = {
  getDirector,
  getAgeRating,
};