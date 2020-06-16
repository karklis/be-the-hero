const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de parametros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?"(filtros e paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (id, etc)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.listen(3333);