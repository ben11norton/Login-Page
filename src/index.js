const express = require("express")
const app = express()
const hbs = require("hbs")

// After defining collection in MongoDB.js
const collection = require("./mongodb")

// Import path module into script to enable 'port connected'
const path = require("path")
const templatePath = path.join(__dirname, "../templates")

// Must connect static files 
app.use(express.static("public"))

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))


app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})


app.post("/signup", async(req, res) => {
    // Define data
    const data = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    }
    // Give data to MongoDB
    await collection.insertMany([data])

    // After data is collected you will be dircted to the "home" page
    res.render("login")

})


app.post("/login", async(req, res) => {
   try{
    const check = await collection.findOne({name:req.body.email})
    
    if(check.password === req.body.password){
        res.render("home")
    }
    else{
        res.send("wrong password")
    }


   }
   catch{
    res.send("wrong details")

   }
})


app.listen(3000, () => {
    console.log("port connected")
})