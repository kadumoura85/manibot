const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const webhook = require('./routes/webhook');

const app = express();
app.use(bodyParser.json());
app.use('/webhook', webhook);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));