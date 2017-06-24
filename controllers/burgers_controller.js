// import express
var express = require("express");

var router = express.Router();

// import model (burger.js) to use its db functions
var burger = require("../models/burger.js");

// export router
module.exports = router;