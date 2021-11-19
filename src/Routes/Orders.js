const express = require("express");
const router = express.Router();
// Order controller
const OrderController = require("../Controllers/Order");

// GET: get all Orders
router.get("/", OrderController.all);
// POST: store Order
router.post("/", OrderController.store);
// PUT: update Order by id
router.put("/", OrderController.update);
// get: order by email
router.get("/:email", OrderController.singleByEmail);

module.exports = router;
