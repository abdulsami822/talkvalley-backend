const mongoose = require("mongoose");
const ApiError = require("../middlewares/ApiError");
const httpStatus = require("http-status");
const validator = require("validator");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new ApiError(httpStatus.BAD_REQUEST, "url is not correct");
        }
      },
    },
  },
  { _id: false }
);

schema.plugin(AutoIncrement); // auto increments _id like 1,2,3....

const Company = mongoose.model("companies", schema);

module.exports = Company;
