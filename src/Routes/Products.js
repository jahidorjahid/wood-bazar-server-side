const express = require("express");
const router = express.Router();

// GET: get all products
router.get("/", (req, res) => {
  res.json({ msg: "get all products" });
});

module.exports = router;
