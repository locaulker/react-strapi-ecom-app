import url from "./URL"

// flattened function
export function flattenedProducts(data) {
  return data.map(item => {
    // (1) for cloudinary, uncomment line below
    // let image = item.image.url

    // (2) local setup - no deployment
    let image = `${url}${item.image.url}`

    return { ...item, image }
  })
}

// helper functions
export const featuredProducts = data => {
  return data.filter(item => {
    return item.featured === true
  })
}
