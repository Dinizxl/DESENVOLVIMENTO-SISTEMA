fun calculateDiscountedPrice(
    price: Double,
    discount: Double,
    tax: Double
): Double {

    val discountedPrice = price - (price * discount / 100)
    val priceWithTax = discountedPrice + (discountedPrice * tax / 100)

    return priceWithTax
}
