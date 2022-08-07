const express = require("express")
const bodyparser=require("body-parser")
const path=require("path")
const app= express()
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json())

// app.get("/",(req,res)=>{
//     res.send("Welcome user")
// })
// app.get("/google",(req,res)=>{
//     // res.send("Welcome ")
//     res.redirect("https://www.google.com/")
// })
app.get("/index",(req,res)=>{
    // res.send("Welcome user")
    // console.log("My website is ")
    res.sendFile(path.join(__dirname+"/public/project.html"))
})
app.get("/",(req,res)=>{
    // res.send("Welcome user")
    // console.log("My website is ")
    res.sendFile(path.join(__dirname+"/public/login.html"))
})
app.post("/handleLogin",(req,res)=>{
       console.log("Client data",req.body.uname,req.body.password)
       if(req.body.uname=="Abhay"&&req.body.password=="12345")
       {
    res.sendFile(path.join(__dirname+"/public/project.html"))

       }
       else{
    res.sendFile(path.join(__dirname+"/public/error.html"))
        
       }
    })
app.listen(5000,()=>{
    console.log("server started on port no 5000")
})
