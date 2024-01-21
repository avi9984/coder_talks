const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: true }
}, { timestamps: true })

const userTokenSchema = new mongoose.Schema({
    userId: { type: Number },
    token: { type: String },
    referessToken: { type: String },
    expiryIn: { type: Number }
}, { timestamps: true })