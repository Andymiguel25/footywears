import React from 'react'
import { Outlet, useParams , Link} from 'react-router-dom'

export const Checkout = () => {
  const {productID} = useParams();
  
  
  
    return (
    <div>
        <h2>Checkout page for product {productID}</h2>
        <p>Proceed to payout</p>

    </div>
  )
}
export default Checkout
