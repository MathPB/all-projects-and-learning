package fundamentos

data class Pessoa (val name: String, val idade: Int) {
    override fun toString(): String {
        return "Class: Pessoa, nome: $name, idade: $idade"
    }
}

fun main() {
    val person = Pessoa("Matheus", 24)

    println(person)
}