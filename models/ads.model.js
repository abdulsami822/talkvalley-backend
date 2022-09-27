const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const httpStatus = require("http-status");
const validator = require("validator");
const ApiError = require("../middlewares/ApiError");
const Company = require("./company.model");

const schema = mongoose.Schema({
  adId: Number,
  companyId: {
    type: Number,
    ref: Company,
    required: [true, "company id is required"],
  },
  primaryText: {
    type: String,
    required: [true, "primary text is required"],
  },
  headline: {
    type: String,
    required: [true, "headline is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  CTA: {
    type: String,
    required: [true, "CTA is required"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: [validator.isURL, "Image url is not correct"],
  },
});

schema.plugin(AutoIncrement, { inc_field: "adId" });

const Ads = mongoose.model("ads", schema);

module.exports = Ads;
