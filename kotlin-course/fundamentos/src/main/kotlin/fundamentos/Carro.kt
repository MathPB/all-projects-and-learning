package fundamentos

data class Carro (val color: String, val yearFabrication: String, val owner: Owner)

data class Owner(val name: String, val age: Int)

fun main() {
    val car = Carro("White", "2021", Owner("Matheus", 24))

    println(car.color)
    println(car)
}