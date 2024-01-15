const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Server is listing on the port: http://localhost:${PORT}`);
})
