require('dotenv').config()
const express = require("express");
const app = express();

app.use(express.json());


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on ${process.env.HOST}:${process.env.SERVER_PORT}/`);
})