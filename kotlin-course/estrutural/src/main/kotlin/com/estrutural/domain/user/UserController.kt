package com.estrutural.domain.user

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("user")
class UserController(
    private val userService: UserService
) {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun createUser(@RequestBody user: User): User {
        return userService.create(user)
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    fun getAll(): MutableIterable<User> {
        return userService.getAll()
    }

    @GetMapping("/{id}")
    fun getUser(@PathVariable id: String): User? {
        return userService.getUser(id)
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun update(@PathVariable id: String, @RequestBody user: User) {
        return userService.update(user)
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    fun delete(@PathVariable id: String) {
        return userService.delete(id)
    }
}