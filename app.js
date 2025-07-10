const express = require("express");
const dbConnection = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const taskRoutes = require("./routes/TaskRoutes");
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 3000;

dbConnection();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", taskRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.send("¡Funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
