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
    types/
  
  app.ts
  server.ts
```
Organização dos módulos (movies-series):

```
movies/
  movies.client.ts
  movies.controller.ts
  movies.helper.ts
  movies.mapper.ts
  movies.routes.ts
  movies.service.ts

series/
  series.client.ts
  series.controller.ts
  series.helper.ts
  series.mapper.ts
  series.routes.ts
  series.service.ts

shared/ 
  helpers/
    cast.helper.ts
    format.helper.ts
    media.helper.ts
    safe.helper.ts
  
  types/
    params.types.ts

```

Cada módulo segue uma arquitetura baseada em responsabilidades:

- **client**: comunicação com APIs externas ou fontes de dados.
- **controller**: gerenciamento das requisições HTTP e respostas.
- **service**: regras de negócio e processamento dos dados.
- **mapper**: transformação e padronização dos dados recebidos.
- **helper**: funções auxiliares reutilizáveis dentro do módulo.
- **routes**: definição dos endpoints da API.

### Shared

A pasta `shared` contém recursos utilizados pelos dois módulos da aplicação (tanto movies quanto series):

- **helpers**: funções utilitárias reutilizáveis.
- **types**: definições de tipos e interfaces compartilhadas entre módulos.


## 🔗 Rotas principais

### Movies
- GET /api/movies/trending
- GET /api/movies/popular
- GET /api/movies/top-rated
- GET /api/movies/up-coming
- GET /api/movies/preview/:movieId
- GET /api/movies/details/:movieId
- GET /api/movies/:movieId/recommendations

### Series
- GET /api/series/trending
- GET /api/series/on-the-air
- GET /api/series/popular
- GET /api/series/top-rated
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
