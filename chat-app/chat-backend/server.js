const express = require("express");

const config = require("./config/app");

const router = require("./router");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

const PORT = config.appPort;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
