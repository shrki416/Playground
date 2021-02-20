const express = require("express");

const config = require("./config/app");

const router = require("./router");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

const PORT = config.appPort;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
