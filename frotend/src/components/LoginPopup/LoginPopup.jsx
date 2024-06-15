import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import Navbar from '../Navbar/Navbar'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'


const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken} = useContext(StoreContext)

    const [currentstate, setCurrentstate] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    } 

    const onLogin = async(event)=>{
        event.preventDefault()
        let newUrl = url;
        if(currentstate === "Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }
        else
        {
            alert(response.data.messege)
        }
    }

    return (    
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentstate}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentstate === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter Your Name" required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter password' required />
                </div>
                <button type='submit'>{currentstate === "sign up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing , i agree the terms and conditions of Tomato.</p>
                </div>
                {currentstate === "Login" 
                ? <p>Create a New Account? <span onClick={()=>setCurrentstate("sign up")}>Click Here</span></p> 
                : <p>Already Have an account? <span onClick={()=>setCurrentstate("Login")}>Login here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup