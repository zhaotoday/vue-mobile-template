export default {
  getTotalPrice (products = []) {
    let totalPrice = 0

    products.forEach(product => {
      if (product.price) {
        totalPrice += product.price * product.number
      } else {
        product.specifications.forEach(specification => {
          totalPrice += specification.price * specification.number
        })
      }
    })

    return totalPrice
  }
}
