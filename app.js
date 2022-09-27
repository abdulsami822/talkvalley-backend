const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");

const ApiError = require("./middlewares/ApiError");
const httpStatus = require("http-status");

const router = require("./routes");
const { errorConvertor, errorHandler } = require("./middlewares/error");

const app = express();

//middlewares
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
app.use("/", router);

//not-found
app.use((res, req, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Requested API is not present"));
});

app.use(errorConvertor);

app.use(errorHandler);

module.exports = app;
