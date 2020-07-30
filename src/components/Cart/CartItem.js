import React from "react"
import { FaAngleUp, FaAngleDown } from "react-icons/fa"
import { CartContext } from "../../context/cart.context"

const CartItem = ({ id, image, title, price, quantity }) => {
  // cart context

  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          className="cart-btn remove-btn"
          onClick={() => {
            console.log("Item Removed")
          }}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn quantity-btn"
          onClick={() => {
            console.log("qty increase")
          }}
        >
          <FaAngleUp />
        </button>
        <p className="item-quantity">{quantity}</p>
        <button
          type="button"
          className="cart-btn quantity-btn"
          onClick={() => {
            console.log("qty decrease")
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
