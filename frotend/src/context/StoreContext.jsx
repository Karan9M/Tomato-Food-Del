import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [food_list,setFoodList] = useState([])

    const [cartItems, setcartItems] = useState({})
    const url = "http://localhost:4000"
    const [token , setToken] = useState("")

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let Total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                Total += iteminfo.price * cartItems[item];
            }
        }
        return Total;
    }

    const fetchFoodlist = async () => {
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodlist()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setcartItems,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider