const express = require("express");
const router = express.Router();

// GET: get all products
router.get("/", (req, res) => {
  res.json({ msg: "get all products" });
});
// GET: get product by id
router.get("/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Laptop" });
});
// POST: store product
router.post("/", (req, res) => {
  res.json({
    id: req.params.id,
    name: "Laptop",
    msg: "product inserted successfully!",
  });
});
// PUT: update product by id
router.put("/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "Laptop",
    msg: "Product update successfully!",
  });
});
// DELETE: delete product by id
router.delete("/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "Laptop",
    msg: "Product was deleted successfully!",
  });
});
module.exports = router;
