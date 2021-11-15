var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.json({ index: "Restful Api with Node Express Mongodb" });
});

module.exports = router;
