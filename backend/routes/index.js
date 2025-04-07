const express = require("express");
const router = express.Router();


const authRoute = require("./auth");


router.use("/api/v1/auth", authRoute);


module.exports = router;
