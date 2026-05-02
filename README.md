# 🎬 CrimsonPlay API

API backend desenvolvida em Node.js + Express que consome a API do TMDB para fornecer dados de filmes e séries.

---

## 🚀 Tecnologias

- Node.js
- Express
- TMDB API
- JavaScript (CommonJS)

---

## 📁 Estrutura

Projeto organizado por módulos (feature-based):

```
src/
  modules/
    movies/
    series/
  shared/
    helpers/
```

## 🔗 Rotas principais

### Movies
- GET /api/movies/trending
- GET /api/movies/preview/:movieId
- GET /api/movies/details/:movieId
- GET /api/movies/:movieId/recommendations

### Series
- GET /api/series/trending
- GET /api/series/preview/:seriesId
- GET /api/series/details/:seriesId
- GET /api/series/:seriesId/recommendations


## ⚙️ Como rodar localmente

#### 1. Clone o repositório
`git clone https://github.com/seu-usuario/crimsonplay-api.git`

#### 2. Instale as dependências
`npm install`

#### 3. Configure o .env
Crie um arquivo `.env` na raiz:

```env
PORT=3000
TMDB_API_KEY=sua_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3
```

#### 4. Rode o servidor
`npm run dev`

## 📌 Créditos e uso da TMDB

Este produto utiliza a API do TMDB, mas não é endossado ou certificado pela TMDB.

Os dados e imagens utilizados neste projeto são fornecidos pela The Movie Database (TMDB).

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.

## 👩‍💻 Autora

Sthefany Souza
