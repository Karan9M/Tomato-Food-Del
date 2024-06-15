import userModel from "../models/userModel.js"

//add to cart
const addToCart = async(req,res) => {
    try {
        let userdata = await userModel.findOne({_id:req.body.userId});
        let cartdata = await userdata.cartdata;
        if(!cartdata[req.body.itemId]){
            cartdata[req.body.itemId] = 1;
        }
        else{
            cartdata[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartdata});
        res.json({success:true,messege:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,messege:"Failed to add to cart"});
    }
}
//remove from cart
const romoveFromCart = async(req,res) => {

}
//fetch user cart data
const fetchcart = async(req,res) => {

}

export {addToCart,romoveFromCart,fetchcart}