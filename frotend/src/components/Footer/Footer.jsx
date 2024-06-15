import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint perspiciatis nisi aut obcaecati, odio cum reprehenderit? Doloremque dolor, omnis soluta tempore, assumenda cumque consectetur iste magni aperiam repudiandae expedita minima.</p>
            <div className="footer-socials">
                <img src={assets.facebook_icon}alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-middle'>
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get in Touch!</h2>
            <ul>
                <li>+91 8799422599</li>
                <li>contact@Tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        <p>CopyRight | @Tomato.com - All Rights Reserved.</p>
      </p>
    </div>
  )
}

export default Footer
