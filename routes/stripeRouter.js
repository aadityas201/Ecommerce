const express = require("express");
const Router = express.Router();
const stripeController = require("./../controllers/stripeController");

Router.post("/", stripeController.stripePayment);

module.exports = Router;
