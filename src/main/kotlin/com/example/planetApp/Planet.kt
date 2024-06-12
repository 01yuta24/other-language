package com.example.planetApp

data class Planet(val id:Long,val name:String,val paramId:Long)

data class Param(
    val id: Long,
    val epoch :Double,
    val a :Double,
    val e :Double,
    val i :Double,
    val om :Double,
    val w :Double,
    val ma :Double,
    val orbitAround :String
    )

data class PlanetData(
    val id:Long,
    val name:String,
    val paramId:Long,
    val epoch :Double,
    val a :Double,
    val e :Double,
    val i :Double,
    val om :Double,
    val w :Double,
    val ma :Double,
    val orbitAround :String
    )

data class Foo(val id: Int, val name: String)