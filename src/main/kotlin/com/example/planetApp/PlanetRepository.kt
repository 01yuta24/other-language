package com.example.planetApp

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.relational.core.sql.In
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository
import java.sql.ResultSet

@Component
class PlanetRowMapper: RowMapper<Planet> {
    override fun mapRow(rs: ResultSet, rowNum: Int): Planet {
        return Planet(rs.getLong(1),rs.getString(2),rs.getLong((3)))
    }

}

@Component
class ParamRowMapper:RowMapper<Param>{
    override fun mapRow(rs: ResultSet, rowNum: Int): Param? {
        return Param(
            id = rs.getLong(1),
            epoch = rs.getDouble(2),
            a = rs.getDouble(3),
            e = rs.getDouble(4),
            i = rs.getDouble(5),
            om = rs.getDouble(6),
            w = rs.getDouble(7),
            ma = rs.getDouble(8),
            orbitAround = rs.getString(9)
        )
    }
}

@Component
class DataRowMapper:RowMapper<PlanetData>{
    override fun mapRow(rs: ResultSet, rowNum: Int): PlanetData? {
        return PlanetData(
            id = rs.getLong(1),
            name = rs.getString(2),
            paramId = rs.getLong(3),
            epoch = rs.getDouble(4),
            a = rs.getDouble(5),
            e = rs.getDouble(6),
            i = rs.getDouble(7),
            om = rs.getDouble(8),
            w = rs.getDouble(9),
            ma = rs.getDouble(10),
            orbitAround = rs.getString(11)
        )
    }
}


@Repository
class PlanetRepository (@Autowired val jdbcTemplate: JdbcTemplate,
                        @Autowired val planetRowMapper: PlanetRowMapper,
                        @Autowired val paramRowMapper: ParamRowMapper,
                        @Autowired val dataRowMapper: DataRowMapper
){
    fun getPlanets():List<Planet>{
        return jdbcTemplate.query("SELECT * FROM planets",planetRowMapper)
    }

    fun postPlanets(planetRequest: PlanetRequest):List<PlanetData> {
        print("planetRequest")
        println(planetRequest.epoch)
//        val paramsData = jdbcTemplate.query("SELECT * FROM params", paramRowMapper)
//        println("*************paramsData ${paramsData.size}")
//        var paramId:Int
//        if(paramsData.size == 0){
//             paramId = 1
//        }else{
//             paramId = paramsData.last().id.toInt() + 1
//        }
//        println("***********paramId $paramId")
        val planetsData = jdbcTemplate.query("SELECT * FROM planets", planetRowMapper)
        var planetId:Int
        if(planetsData.size == 0){
            planetId = 1
        }else{
            planetId = planetsData.last().id.toInt() + 1
        }
        println("*********** $planetId")
        jdbcTemplate.update(
            "INSERT INTO params VALUES (?,?,?,?,?,?,?,?,?);",
            planetId,
            planetRequest.epoch,
            planetRequest.semiMajor,
            planetRequest.eccentricity,
            planetRequest.inclination,
            0.1,
            0.1,
            0.1,
            planetRequest.orbitAround
        )
        val newParamsData = jdbcTemplate.query("SELECT * FROM params", paramRowMapper)
        print("new")
        println(newParamsData)
        jdbcTemplate.update(
            "INSERT INTO planets VALUES (?,?,?);",
            planetId,
            planetRequest.name,
            planetId
        )
       return jdbcTemplate.query(
            "SELECT planets.id,\n" +
                    "planets.name,\n" +
                    "planets.param_id,\n" +
                    "params.epoch,\n" +
                    "params.a,\n" +
                    "params.e,\n" +
                    "params.i,\n" +
                    "params.om,\n" +
                    "params.w,\n" +
                    "params.ma,\n" +
                    "params.orbit_around\n" +
                    "FROM planets \n" +
                    "JOIN params ON planets.param_id = params.id"
            ,dataRowMapper)
    }

    fun deletePlanets(planetDelRequest: PlanetDelRequest):Array<String>{
        print("*********** ${planetDelRequest.deleteList[0]} *****************")
        val request:Array<String> = planetDelRequest.deleteList
        val array: Array<Int> = planetDelRequest.deleteList.map { it.toInt() }.toTypedArray()
        array.forEach { id -> jdbcTemplate.update("DELETE FROM planets WHERE id IN (?)",id) }
        array.forEach { id -> jdbcTemplate.update("DELETE FROM params WHERE id IN (?)",id) }
        return request
    }

    fun getParams():List<Param>{
        return jdbcTemplate.query("SELECT * FROM params",paramRowMapper)
    }
    fun getData():List<PlanetData>{
       return jdbcTemplate.query(
            "SELECT planets.id,\n" +
                    "planets.name,\n" +
                    "planets.param_id,\n" +
                    "params.epoch,\n" +
                    "params.a,\n" +
                    "params.e,\n" +
                    "params.i,\n" +
                    "params.om,\n" +
                    "params.w,\n" +
                    "params.ma,\n" +
                    "params.orbit_around\n" +
                    "FROM planets \n" +
                    "JOIN params ON planets.param_id = params.id"
            ,dataRowMapper)
    }
}
