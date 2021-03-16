const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
