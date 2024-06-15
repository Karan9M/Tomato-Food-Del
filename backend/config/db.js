import mongoose from "mongoose";

export const connectdb = async () => {
    await mongoose.connect('mongodb+srv://karanmavadiya38:6UE1dSZoZZN292uZ@cluster0.ynxrzj8.mongodb.net/Tomato').then(()=>{
        console.log("Db connected")
    })
}