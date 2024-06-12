package com.example.planetApp

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
//@CrossOrigin
//@ResponseBody
class PlanetController(val planetRepository: PlanetRepository) {

    @GetMapping("/planets")
    fun getPlanets(): List<Planet> {
        return planetRepository.getPlanets()
    }
    @PostMapping("/planets")
    fun postPlanets(@RequestBody planetRequest: PlanetRequest):List<PlanetData>{
        return planetRepository.postPlanets(planetRequest)
    }
    @GetMapping("/params")
    fun getParams():List<Param>{
        return planetRepository.getParams()
    }
    @GetMapping("/planetData")
    fun getData(): List<PlanetData> {
        return planetRepository.getData()
    }



    @GetMapping("/home")
    fun home():String {
        return "redirect:index.html";
    }
    @GetMapping("/born")
    fun born():String {
        return "redirect:index.html";
    }
}