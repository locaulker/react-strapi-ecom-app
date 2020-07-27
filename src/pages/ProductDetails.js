import React from "react"
import { useParams } from "react-router-dom"

function ProductDetails() {
  const { id } = useParams()

  return (
    <div>
      <h1> Product id is: {id}</h1>
    </div>
  )
}

export default ProductDetails
