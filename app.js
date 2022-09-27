const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

//parse requests containing json payloads
app.use(express.json());

//enables CORS
app.use(cors());

//adds extra secure headers
app.use(helmet());

//compresses response bodies to make faster responses
app.use(compression());

//for security
app.use(mongoSanitize());

//entry point

module.exports = app;
