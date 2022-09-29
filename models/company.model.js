const mongoose = require("mongoose");
const validator = require("validator");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema(
  {
    _id: Number,
    name: {
      type: String,
      required: [true, "enter a company name"],
      unique: [true, "company name is already taken"],
      trim: true,
    },
    url: {
      type: String,
      required: [true, "enter company website url"],
      unique: [true, "company name is already taken"],
      trim: true,
      validate: [validator.isURL, "url is not correct"],
    },
  },
  { _id: false }
);
schema.index({ "$**": "text" }, { name: "AllTextIndex" });
// auto increments _id like 1,2,3....
schema.plugin(AutoIncrement);

const Company = mongoose.model("companies", schema);

module.exports = Company;
