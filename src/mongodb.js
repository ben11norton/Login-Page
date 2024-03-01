const mongoose = require("mongoose")

// Create database
mongoose.connect("mongodb://localhost:27017/LoginFinal")
.then(() => {
    console.log("mongodb connected")
})
.catch(() => {
    console.log("failed to connect")
})

// Create Schema for document 
const LogInSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// Define the Collection
const collection = new mongoose.model("Collection2", LogInSchema)

module.exports = collection