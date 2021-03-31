const express = require("express");
const router = express.Router();
const Sum = require("../../controller/sum");
const Controller = new Sum();
router.post("/calculate", Controller.calculate);
let obj = router;
module.exports = { obj };
