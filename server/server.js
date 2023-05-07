require('dotenv').config()
const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const mongoDB = require('./db/mongoDB');


const app = express()
//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/todo',todoRoutes)

// server
const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`server on port ${port}`)
    // connect MongoDB
    mongoDB();
})
