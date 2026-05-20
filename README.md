# ProjetoAcademia

Aplicação web em Node.js/Express com Nunjucks como template engine. Pelo nome do pacote (`portofolio-academia`) e pela estrutura (controllers, views, `data.json`), aparenta ser um site institucional de academia/portfólio com persistência em arquivo JSON.

## Tecnologias

- Node.js / [Express](https://expressjs.com/) 4
- [Nunjucks](https://mozilla.github.io/nunjucks/) (templates `.njk`)
- [nodemon](https://nodemon.io/) para dev (reinicia o servidor ao salvar)
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
npm start
```

Servidor em http://localhost:5000.

## Status

Projeto acadêmico de 2020 — mantido como arquivo histórico. Recebeu uma atualização de segurança em 2026-05-20 (dependências regeneradas, `browser-sync` removido para zerar vulnerabilidades upstream). Não aceita PRs de novas features.

## Licença

[MIT](LICENSE).
