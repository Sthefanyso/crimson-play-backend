const { buildImageUrl } = require("./media.helper");

// Função para formatar o papel do ator com base na ordem de crédito
const formatCastRole = (order: number | null | undefined) => {
  if (order === null || order === undefined) return "Participações";

  if (order <= 2) return "Elenco Principal";
  if (order <= 6) return "Elenco de Apoio";

  return "Participações";
};

// Função para mapear os dados do elenco
const mapActor = (actor: any) => ({
  id: actor.id,
  name: actor.name || "Não informado",
  character: actor.character || "Não informado",
  profile: buildImageUrl(actor.profile_path),
  role: formatCastRole(actor.order),
});

// Função para formatar o elenco principal de um filme ou série, limitando a 10 atores
export const formatCast = (cast: any[] = [], limit = 10) => {
  return cast.slice(0, limit).map(mapActor);
};

// Função para formatar os atores convidados de um episódio, limitando a 10 atores
export const formatGuestStars = (guestStars: any[] = [], limit = 10) => {
  return guestStars.slice(0, limit).map((actor) => ({
    id: actor.id,
    name: actor.name || "Não informado",
    character: actor.character || "Não informado",
    profile: buildImageUrl(actor.profile_path),
    role: "Participações",
  }));
};
