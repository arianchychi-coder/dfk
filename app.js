require("dotenv").config()
const hameshRouter = require("./routes/hamaesh_route")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use("/",hameshRouter)
const PORT = process.env.APP_PORT || 3000
app.listen(PORT,()=>{
    console.log(`Listen to ${PORT}`)
})