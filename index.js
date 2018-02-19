const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/config");

mongoose.connect(config.mongoURI);

const app = express();

//middlewars
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT);