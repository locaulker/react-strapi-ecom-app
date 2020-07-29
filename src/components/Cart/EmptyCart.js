import React from "react"
import { Link } from "react-router-dom"

const EmptyCart = () => {
  return (
    <section className="section empty-cart">
      <h2>Cart is Empty ...</h2>
      <Link to="/products" className="btn btn-primary">
        Add Products
      </Link>
    </section>
  )
}

export default EmptyCart
