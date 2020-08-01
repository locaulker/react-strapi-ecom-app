import React from "react"
import axios from "axios"
import url from "../utils/URL"
import { featuredProducts, flattenedProducts } from "../utils/helpers"

export const ProductContext = React.createContext()

// Provider, Consumer, useContext()
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false)
  const [products, setProducts] = React.useState([])
  const [featured, setFeatured] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    axios.get(`${url}/products`).then(response => {
      // const featured = featuredProducts(response.data)
      const featured = featuredProducts(flattenedProducts(response.data))
      const products = flattenedProducts(response.data)

      setProducts(products)
      setFeatured(featured)
      setLoading(false)
    })

    return () => {}
  }, [])

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
