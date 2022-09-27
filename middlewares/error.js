const httpStatus = require("http-status");
const ApiError = require("./ApiError");

const errorConvertor = (error, req, res, next) => {
  let convertedError;

  //validation error
  if (error.name == "ValidationError") {
    const errors = Object.values(error.errors).map((err) => err.message);
    const message = errors[errors.length - 1]; //response with final error in the errors array
    convertedError = new ApiError(httpStatus.BAD_REQUEST, message);
  }

  //mongoserver duplication error
  else if (error.code && error.code == 11000) {
    const message = `${Object.keys(error.keyValue)} with value '${Object.values(
      error.keyValue
    )}' is already taken`;
    convertedError = new ApiError(httpStatus.BAD_REQUEST, message);
  }

  //Unknown error
  else {
    const message = "An unknown error occured";
    convertedError = new ApiError(httpStatus.INTERNAL_SERVER_ERROR, message);
  }
  next(convertedError);
};

const errorHandler = (error, req, res, next) => {
  res.status(error.statusCode).send(error.message);
};

module.exports = { errorConvertor, errorHandler };
