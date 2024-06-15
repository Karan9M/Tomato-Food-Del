import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//Login user
const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false,message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false,messege:"invalid creds"})
        }

        const token = createToken(user._id);
        res.json({success:true,token});
    
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"something went wrong"})
    }
}

const createToken = (id) =>{
    return jwt.sign({ id },process.env.JWT_SECRET)
}

//resister user
const registerUser = async (req, res) => {
    const {name,password,email} = req.body;
    try {
        //checking is user already exist
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false,messege:"User already exist"})
        }

        // valiting email format and strong pass

        if (!validator.isEmail(email)) {
            return res.json({success:false,messege:"Please enter valid email"})
        }
        if (password.length<8) {
            return res.json({success:false,messege:"Please enter srtong password"})
        }

        // hashing user password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = crateToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,messege:"Something went wrong"})
    }
}

export   {loginUser,registerUser}