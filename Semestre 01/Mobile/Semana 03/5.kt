// Calcula o preço com desconto
fun applyDiscount(price: Double, discount: Double): Double {
    return price - (price * discount / 100)
}

// Calcula o imposto sobre o preço
fun applyTax(price: Double, tax: Double): Double {
    return price + (price * tax / 100)
}

// Calcula o preço final após aplicar desconto e imposto
fun calculateFinalPrice(
    price: Double,
    discount: Double,
    tax: Double
): Double {
    val discountedPrice = applyDiscount(price, discount)
    return applyTax(discountedPrice, tax)
}
