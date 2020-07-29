import React from "react"
import { CartContext } from "../context/cart.context"

const Cart = () => {
  const { cart, total } = React.useContext(CartContext)
  console.log(cart, total)

  return (
    <div>
      <h1>hello from cartPage</h1>
    </div>
  )
}

export default Cart
