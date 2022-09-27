const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`connection at ${config.port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
