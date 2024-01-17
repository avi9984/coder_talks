const { generateOTP } = require("../Services/otpServices");
const { hashOtp } = require("../Services/hashServices");
const sendOTP = async (req, res) => {
    try {
        const body = req.body;
        const { phone } = body
        if (!phone) {
            return res.status(400).json({ status: false, message: "Phone field is required" })
        }
        const otp = await generateOTP();
        const ttl = 1000 * 60 * 2// 2 min
        const expire = Date.now() * ttl;
        const data = `${phone}.${otp}.${expire}`
        const hash = await hashOtp(data);
        return res.status(200).json({ status: true, message: "OTP send in phone", data: hash })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Internal Server Error" })
    }
}

module.exports = { sendOTP }