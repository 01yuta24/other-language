package com.example.planetApp

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class PlanetController {

    @GetMapping("/planets")
    @ResponseBody
    @CrossOrigin
    fun getPlanets(): String {
        return "Here are planets!"
    }

}