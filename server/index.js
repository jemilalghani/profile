const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.post("/api/email", controller.contactMe);

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
  console.log(`Tuning into Port ${SERVER_PORT} 📡`);
});
