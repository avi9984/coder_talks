const crypto = require('crypto');

const generateOTP = async () => {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
}




module.exports = { generateOTP }


