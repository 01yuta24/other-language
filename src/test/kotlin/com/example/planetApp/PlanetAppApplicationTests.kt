package com.example.planetApp

import org.hamcrest.MatcherAssert.assertThat
import org.hamcrest.Matchers.equalTo
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.client.postForEntity
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.test.context.jdbc.Sql

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql("/insert_params_data.sql")
@Sql("/insert_planets_data.sql")
class PlanetAppApplicationTests(@Autowired val restTemplate: TestRestTemplate,
								@LocalServerPort val port: Int) {

	@Test
	fun `最初のテスト`() {
		assertThat(1+2, equalTo(3))
	}

	@Test
	fun `planets GETでOKが返ってくる`() {
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/planets", Array<Planet>::class.java)
		// レスポンスのステータスコードは OK である。
		assertThat(response.statusCode, equalTo(HttpStatus.OK))
	}

	@Test
	fun `planets GETで全データ取得`(){
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/planets", Array<Planet>::class.java)
		// レスポンスの Content-Type は application/json であること。
		assertThat(response.headers.contentType, equalTo(MediaType.APPLICATION_JSON))
		// 配列は2つの要素をもつこと。
		val planets = response.body!!
		assertThat(planets.size, equalTo(2))
		// 最初の要素は id=1 であり、text が "foo" であること。
		assertThat(planets[0].id, equalTo(1))
		assertThat(planets[0].name, equalTo("planet1"))
		assertThat(planets[0].paramId, equalTo(1))
		// 次の要素は id=2 であり、text が "bar" であること。
		assertThat(planets[1].id, equalTo(2))
		assertThat(planets[1].name, equalTo("planet2"))
		assertThat(planets[1].paramId, equalTo(2))
	}

	@Test
	fun `planets POSTでOKが返ってくる`() {
		val foo = PlanetRequest("taro",10000.0,0.3,0.3,0.3,"sun")
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.postForEntity("http://localhost:$port/api/planets",foo, Array<PlanetRequest>::class.java)
		// レスポンスのステータスコードは OK である。
		assertThat(response.statusCode, equalTo(HttpStatus.OK))
	}

	@Test
	fun `planets POSTするとデータが一つ増える`() {
		val getResponse = restTemplate.getForEntity("http://localhost:$port/api/planetData", Array<PlanetData>::class.java)
		val todos1 = getResponse.body!!

		val foo = PlanetRequest("taro",10000.0,0.3,0.3,0.3,"sun")
		val response = restTemplate.postForEntity("http://localhost:$port/api/planets",foo, Array<PlanetRequest>::class.java)

		// ふたたび localhost/todos に GETリクエストを送り、レスポンスを Todoオブジェクトの配列として解釈する。
		val getResponse2 = restTemplate.getForEntity("http://localhost:$port/api/planetData", Array<PlanetData>::class.java)
		// このときのレスポンスを todos2 として記憶。
		val todos2 = getResponse2.body!!

		// 配列 todos2 は、配列 todos1 よりも 1 要素だけ多い。
		assertThat(todos2.size, equalTo(todos1.size + 1))







	}

	@Test
	fun `params GETでOKが返ってくる`(){
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/params", Array<Param>::class.java)
		// レスポンスのステータスコードは OK である。
		assertThat(response.statusCode, equalTo(HttpStatus.OK))
	}

	@Test
	fun `params GETで全データ取得`(){
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/params", Array<Param>::class.java)
		// レスポンスの Content-Type は application/json であること。
		assertThat(response.headers.contentType, equalTo(MediaType.APPLICATION_JSON))
        // 配列は2つの要素をもつこと。
		val params = response.body!!
		assertThat(params.size, equalTo(2))
	}

	@Test
	fun `planetData GETでOKが返ってくる`(){
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/planetData", Array<PlanetData>::class.java)
		// レスポンスのステータスコードは OK である。
		assertThat(response.statusCode, equalTo(HttpStatus.OK))
	}

	@Test
	fun `planetData GETで全データ取得`(){
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/planetData", Array<PlanetData>::class.java)
		// レスポンスの Content-Type は application/json であること。
		assertThat(response.headers.contentType, equalTo(MediaType.APPLICATION_JSON))
		// 配列は2つの要素をもつこと。
		val params = response.body!!
		assertThat(params.size, equalTo(2))
	}
}
