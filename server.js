require("dotenv").config()
const express=require("express")
const cors= require("cors")
const corsOptions=require("./config/corsOptions")


const app=express()
const PORT=process.env.PORT || 2500

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/users",)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})