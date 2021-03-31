const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
module.exports = (app) => {
  app.use(express.static(path.join(__dirname, "/")));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
};
