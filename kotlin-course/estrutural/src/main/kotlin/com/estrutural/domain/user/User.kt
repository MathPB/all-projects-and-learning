package com.estrutural.domain.user

import org.jetbrains.annotations.NotNull
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity(name = "user")
data class User(
    @Id
    val id: String = UUID.randomUUID().toString(),

    @NotNull
    @Column(length = 36)
    var name: String,

    @get:NotNull
    @Column(length = 36)
    var email: String,

    @get:NotNull
    @Column(length = 20)
    var phone: String,

    @get:NotNull
    @Column(length = 11)
    var cpf: String,

    @get:NotNull
    @Column(length = 9)
    var cep: String,

    @get:NotNull
    @Column(length = 36)
    var street: String,

    @get:NotNull
    @Column(length = 36)
    var district: String,

    @get:NotNull
    @Column(length = 10)
    var number: String
)
