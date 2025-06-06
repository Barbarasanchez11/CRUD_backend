const express = require('express');
const app = express();
const dbConnection = require('./config/db')
const dotenv = require('dotenv')
require('dotenv').config()
const PORT = 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send(' funcionando!');
});

dbConnection()

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
