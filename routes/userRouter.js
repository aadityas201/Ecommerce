const express = require("express");
const Router = express.Router();
const userController = require("./../controllers/userController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./../controllers/verifyToken");

Router.put("/:id", verifyToken, userController.update);
Router.delete("/:id", verifyToken, userController.delete);
Router.get("/", verifyTokenAndAdmin, userController.getAllUsers);
Router.get("/find/:id", verifyTokenAndAdmin, userController.findUser);
Router.get("/stats", verifyTokenAndAdmin, userController.getStats);
module.exports = Router;
