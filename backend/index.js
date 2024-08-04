import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
});

const app = express()

// to make input as json
app.use(express.json)
app.use(cors())
app.use(express.static("public"))

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})