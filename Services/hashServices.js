const crypto = require('crypto');
require('dotenv').config();
const hashOtp = async (data) => {
    const hash = crypto.createHmac('sha256', process.env.HASH_SECRET)
        .update(data)
        .digest('hex')
    console.log(hash, "hash");
    return hash
}

module.exports = { hashOtp }