package com.example.planetApp

import net.sf.jsqlparser.Model
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@Controller
@RequestMapping("/")
class PlanetIndex(){
    @RequestMapping("/home","/born","/stock")
    fun index():String{
        return "forward:/"
    }
}


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
    @DeleteMapping("/planets")
    fun deletePlanets(@RequestBody planetDelRequest: PlanetDelRequest):Array<String>{
        println("************ $planetDelRequest ****************")
        return planetRepository.deletePlanets(planetDelRequest)
    }
    @GetMapping("/params")
    fun getParams():List<Param>{
        return planetRepository.getParams()
    }
    @GetMapping("/planetData")
    fun getData(): List<PlanetData> {
        return planetRepository.getData()
    }

}