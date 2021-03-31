const Sum = require("./sum");
module.exports = (app) => {
  app.use("/api/v1/", Sum.obj);
};
