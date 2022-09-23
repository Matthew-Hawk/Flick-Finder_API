//Import list
const express = require("express");
const app = express()
const cors = require("cors");   
const axios = require("axios");
require('dotenv').config()
const {PORT} = process.env || 8080;


//Middleware
app.use(cors())
app.use(express.json()); // to get request body
app.use(express.static('public')); // to get images as 

//Routes
app.get("/shaun", (req,res) =>{
    axios.get("https://api.themoviedb.org/3/movie/747?api_key=1982fd1af252ec342c42890ca80f692a&language=en-US")
        .then((response) =>{
           res.send(response.data)
           console.log(response.data) 
        })
});
app.get("/hotfuzz", (req,res) =>{
    axios.get("https://api.themoviedb.org/3/movie/4638?api_key=1982fd1af252ec342c42890ca80f692a&language=en-US")
        .then((response) =>{
           res.send(response.data)
           console.log(response.data) 
        })
});
app.get("/worldsend", (req,res) =>{
    axios.get("https://api.themoviedb.org/3/movie/107985?api_key=1982fd1af252ec342c42890ca80f692a&language=en-US")
        .then((response) =>{
           res.send(response.data)
           console.log(response.data) 
        })
});
app.get("/babydriver", (req,res) =>{
    axios.get("https://api.themoviedb.org/3/movie/339403-?api_key=1982fd1af252ec342c42890ca80f692a&language=en-US")
        .then((response) =>{
           res.send(response.data)
           console.log(response.data) 
        })
});



app.listen(8080, () =>{
    console.log(`Running on port ${PORT}....`)
    console.log('To kill API press CTRL + C')
    console.log('Or dont.. its not like i can go anywhere else >:(')
})