const express = require("express");
const router = express.Router();
const { sendOTP } = require("../controllers/user")

router.post("/sendOtp", sendOTP)



module.exports = router;