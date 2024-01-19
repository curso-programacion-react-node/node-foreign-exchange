const express = require("express");
const http = require("http");
const cors = require("cors");
const currencies = require("./data.json");

const app = express();
const PORT = 3005;

/* Middlewares */
app.use(express.json());
app.use(cors());

/* Routes */
const prefix = "/api/v1";
app.get(prefix + "/currencies", (req, res) => {
  res.json(currencies);
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Puerto iniciado en puerto: http://localhost:${PORT}`);
});