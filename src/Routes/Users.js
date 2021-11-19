const express = require("express");
const router = express.Router();
// User controller
const UserController = require("../Controllers/User");

// GET: get all users
router.get("/", UserController.all);
// GET: get admin by email
router.get("/:email", UserController.getAdmin);
// POST: store user
router.post("/", UserController.store);
// PUT: upsert user
router.put("/", UserController.update);
// PUT: update user role by default 'user'
router.put("/role", UserController.updateRole);

module.exports = router;
