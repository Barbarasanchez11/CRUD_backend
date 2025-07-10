const express = require("express");
const router = express.Router();
const authTask = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const authController = require("../controllers/authController");

router.get("/dashboard", authMiddleware, authController.showNewTask);

module.exports = router;
