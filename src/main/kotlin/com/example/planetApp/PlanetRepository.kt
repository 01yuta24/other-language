package com.example.planetApp

import org.springframework.beans.factory.annotation.Autowired
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
