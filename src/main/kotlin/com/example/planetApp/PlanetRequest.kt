package com.example.planetApp

data class PlanetRequest(val name:String,val epoch:Double,val semiMajor:Double,val eccentricity:Double,val inclination:Double,
val orbitAround :String
    )