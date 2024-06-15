import express from "express"
import { addToCart,romoveFromCart, fetchcart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/Auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,romoveFromCart)
cartRouter.post("/get",authMiddleware,fetchcart)

export default cartRouter;