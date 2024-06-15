import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRoute from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//karanmavadiya38
//6UE1dSZoZZN292uZ

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//Db connection
connectdb();

// api endpoints
app.use("/api/food",foodRouter) 
app.use("/image",express.static('uploads'))
app.use("/api/user", userRoute)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req ,res)=>{
    res.send("Api working")
})

app.listen(port,()=>{
    console.log(`Server is running on  http://localhost:${port}`)
})

//mongodb+srv://karanmavadiya38:6UE1dSZoZZN292uZ@cluster0.ynxrzj8.mongodb.net/?