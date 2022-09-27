const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    validate(value) {},
  },
});
