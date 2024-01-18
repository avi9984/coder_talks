const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: true }
}, { timestamps: true })