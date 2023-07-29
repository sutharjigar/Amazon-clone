import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/NAB/PGC_Stripe_PC.jpg"
          alt="checkout_ad"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
          {/* {Checkout Porduct} */}
          {/* {Checkout Porduct} */}
          {/* {Checkout Porduct} */}
          {/* {Checkout Porduct} */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>The Subtotal will go here</h2>
      </div>
    </div>
  )
}
export default Checkout
