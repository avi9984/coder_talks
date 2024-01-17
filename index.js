const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();
const userRoute = require("./routers/user")
const PORT = process.env.PORT || 3000;

app.use(express.json())
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err))


app.use('/v1/user', userRoute)
app.listen(PORT, () => {
    console.log(`Server is listing on the port: http://localhost:${PORT}`);
})
