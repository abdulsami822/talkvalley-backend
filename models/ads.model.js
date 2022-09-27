const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const httpStatus = require("http-status");
const validator = require("validator");
const ApiError = require("../middlewares/ApiError");
const Company = require("./company.model");

const schema = mongoose.schema(
  {
    companyId: {
      type: Number,
      ref: Company,
      required: true,
      minlength: 0,
    },
    primaryText: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    CTA: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "image url is not correct"
          );
        }
      },
    },
  },
  { _id: false }
);

schema.plugin(AutoIncrement);

const Ads = mongoose.model("ads", schema);

module.exports = Ads;
