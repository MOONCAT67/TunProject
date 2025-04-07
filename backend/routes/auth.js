const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register_user);

router.post("/login", authController.login_user);

router.post("/rolegetting", authController.getUserRole);

module.exports = router;