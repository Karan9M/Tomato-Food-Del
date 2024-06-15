import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery info</p>
        <div className="multi-fields">
          <input type="text" placeholder='FistName' />
          <input type="text" placeholder='LastName' />
        </div>
        <input type="email" placeholder='Email adress' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zipcode' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?"0":"2"}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Proceed to Check Out!</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
