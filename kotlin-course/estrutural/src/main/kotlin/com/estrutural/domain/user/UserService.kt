package com.estrutural.domain.user

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository
) {

    fun create(user: User): User {
        return userRepository.save(user)
    }

    fun getAll(): MutableIterable<User> {
        return userRepository.findAll()
    }

    fun getUser(id: String): User? {
        return userRepository.findById(id).orElse{NotFoundException()}
    }

    fun update(user: User) {
        userRepository.save(user)
    }

    fun delete(id: String) {
        userRepository.deleteById(id)
    }
}

//  name = "Matheus Pereira Barbosa",
//  email = "matheus.pereira4025@hotmail.com",
//  cpf = "46965375876",
//  cep = "13630-060",
//  street = "Rua riachuelo",
//  district = "Centro",
//  number = "764",
//  phone = "(19) 998309583"