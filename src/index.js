import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import ProductProvider from "./context/products.context"
import { CartProvider } from "./context/cart.context"

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>,

  document.getElementById("root")
)
