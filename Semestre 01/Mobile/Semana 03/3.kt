fun main() {
    val userName: String = "João"
    val total = calculateTotal(10.0, 2)

    println("Usuário: $userName")
    println("Total: $total")
}

fun calculateTotal(price: Double, quantity: Int): Double {
    return price * quantity
}
