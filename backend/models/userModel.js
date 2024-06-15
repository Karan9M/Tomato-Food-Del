import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})


const userModel = mongoose.model.user || mongoose.model("user",userScehma)
export default userModel;