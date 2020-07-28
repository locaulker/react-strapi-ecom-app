import React, { useContext } from "react"
import { ProductContext } from "../context/products.context"
import Loading from "../components/Loading"
import ProductList from "../components/Products/ProductList"

export default function Products() {
  const { loading, products } = React.useContext(ProductContext)
  console.log(products)

  if (loading) {
    return <Loading />
  }

  return <ProductList title="Our Products" products={products} />
}
