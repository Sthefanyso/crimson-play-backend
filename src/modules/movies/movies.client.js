// Função auxiliar para fazer requisições a API e tratar erros 
const fetchTmdbData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Erro na TMDB");
  }

  return response.json();
};

module.exports = {
  fetchTmdbData,
};