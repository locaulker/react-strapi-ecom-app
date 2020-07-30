import React from "react"
import localCart from "../utils/localCart"

const CartContext = React.createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(localCart)
  const [total, setTotal] = React.useState(0)
  const [cartItems, setCartItems] = React.useState(0)

  React.useEffect(() => {
    // local storage

    // cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.quantity)
    }, 0)
    setCartItems(newCartItems)

    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.quantity * cartItem.price)
    }, 0)
    newTotal = parseFloat(newTotal.toFixed(2))
    setTotal(newTotal)
  }, [cart])

  // remove item
  const removeItem = id => {
    // Method 1
    let newCart = [...cart].filter(item => item.id !== id)
    setCart(newCart)

    // Method 2
    // setCart([...cart].filter(item => item.id !== id))
  }

  // remove item
  const increaseQuantity = id => {}

  // decrease Quantity
  const decreaseQuantity = id => {}

  // add to cart
  const addToCart = product => {}

  // clear cart
  const clearCart = () => {}

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
