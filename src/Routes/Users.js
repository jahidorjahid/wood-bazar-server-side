const express = require("express");
const router = express.Router();
// User controller
const UserController = require("../Controllers/User");

// GET: get all users
router.get("/", UserController.all);
// POST: store user
router.post("/", UserController.store);
// PUT: upsert user
router.put("/", UserController.update);

module.exports = router;
