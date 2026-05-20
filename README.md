# ProjetoAcademia

Aplicação web em Node.js/Express com Nunjucks como template engine. Pelo nome do pacote (`portofolio-academia`) e pela estrutura (controllers, views, `data.json`), aparenta ser um site institucional de academia/portfólio com persistência em arquivo JSON.

## Tecnologias

- Node.js / [Express](https://expressjs.com/) 4
- [Nunjucks](https://mozilla.github.io/nunjucks/) (templates `.njk`)
- [browser-sync](https://browsersync.io/) + [nodemon](https://nodemon.io/) para dev
- `method-override` para suporte a PUT/DELETE em forms

## Estrutura

```
server.js          — servidor Express na porta 5000
routes.js          — rotas
utils.js           — utilitários
data.json          — persistência em arquivo
controllers/       — controladores
views/             — templates Nunjucks
public/            — assets estáticos
```

## Como rodar

```bash
npm install
npm start          # roda nodemon + browser-sync
```

Servidor em http://localhost:5000.

## Status

Projeto acadêmico de 2020. Mantido como arquivo histórico — não recebe manutenção nem aceita PRs.

## Licença

[MIT](LICENSE).
