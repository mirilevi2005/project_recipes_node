require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()

const recipeRouter =require('./routes/recipeRouter')
app.use('/', recipeRouter);

//middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
//routes
app.get("/", (req, res) => {
    res.send("this is the home page")
})
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
//     console.log(process.env.NODE_ENV)
// })
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})




