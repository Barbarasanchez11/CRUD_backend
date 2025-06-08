const express = require('express');
const app = express();
const dbConnection = require('./config/db')
const dotenv = require('dotenv')
require('dotenv').config()
const admin = require('firebase-admin')
const {serviceAccount} = require('./config/firebase.js')
const taskRoutes = require('./routes/TaskRoutes')
const PORT = process.env.PORT || 3000;


try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (error) {
  console.error('Error initialization Firebase Admin:', error.message);
}

dbConnection()

app.use(express.json());
app.use('/', taskRoutes)

app.get('/', (req, res) => {
  res.send(' funcionando!');
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
