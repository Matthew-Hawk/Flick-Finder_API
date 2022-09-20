//Import list
const express = require("express");
const app = express()
const cors = require("cors");   
require('dotenv').config()
const {PORT} = process.env || 8080;


//Middleware
app.use(cors())
app.use(express.json()); // to get request body
app.use(express.static('public')); // to get images as 

//Routes
app.use("/");

app.listen(8080, () =>{
    // console.log(`Running on port ${PORT}....`)
    console.log('To kill API press CTRL + C')
})