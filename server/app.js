const express = require("express");
const middleware = require("./middleware");
const PORT = process.env.PORT || 4000;
const app = express();
const Router = require("./router/index");
middleware(app);
Router(app);
app.listen(PORT, (req, res, next) => {
  console.log(`APP IS WORKING ON PORT # ${PORT}`);
});
