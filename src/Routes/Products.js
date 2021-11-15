const express = require("express");
const router = express.Router();
// product controller
const productController = require("../Controllers/Product");

// GET: get all products
router.get("/", productController.all);
// GET: get product by id
router.get("/:id", productController.single);
// POST: store product
router.post("/", productController.store);
// PUT: update product by id
router.put("/:id", productController.update);
// DELETE: delete product by id
router.delete("/:id", productController.delete);

module.exports = router;
