import React from "react"
import ProductList from "./ProductList"
import { ProductContext } from "../../context/products.context"
import Loading from "../Loading"

const FeaturedProducts = () => {
  const { loading, featured } = React.useContext(ProductContext)

  if (loading) {
    return <Loading />
  }

  return <ProductList title="featured" products={featured} />
}

export default FeaturedProducts
