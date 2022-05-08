const express = require("express");
const orderController = require("./../controllers/orderController");
const Router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./../controllers/verifyToken");

Router.post("/", verifyToken, orderController.newOrder);
Router.put("/:id", verifyTokenAndAdmin, orderController.updateOrder);
Router.delete("/:id", verifyTokenAndAdmin, orderController.deleteOrder);
Router.get("/find/:userId", verifyTokenAndAdmin, orderController.userOrders);
Router.get("/", verifyTokenAndAdmin, orderController.getAllOrders);
Router.get("/revenue", verifyTokenAndAdmin, orderController.monthlyRevenue);

module.exports = Router;
