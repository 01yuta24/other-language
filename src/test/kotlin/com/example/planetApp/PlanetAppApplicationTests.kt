package com.example.planetApp

import org.hamcrest.MatcherAssert.assertThat
import org.hamcrest.Matchers.equalTo
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.test.context.jdbc.Sql

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql("/insert_test_data.sql")
class PlanetAppApplicationTests(@Autowired val restTemplate: TestRestTemplate,
								@LocalServerPort val port: Int) {

	@Test
	fun `最初のテスト`() {
		assertThat(1+2, equalTo(3))
	}

	@Test
	fun `GETでOKが返ってくる`(){
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/planets", String::class.java)
		// レスポンスのステータスコードは OK である。
		assertThat(response.statusCode, equalTo(HttpStatus.OK))
	}

	@Test
	fun `GETで全データ取得`(){
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/planets", Array<Planet>::class.java)
		// レスポンスの Content-Type は application/json であること。
		assertThat(response.headers.contentType, equalTo(MediaType.APPLICATION_JSON))
		// 配列は2つの要素をもつこと。
		val todos = response.body!!
		assertThat(todos.size, equalTo(2))
		// 最初の要素は id=1 であり、text が "foo" であること。
		assertThat(todos[0].id, equalTo(1))
		assertThat(todos[0].name, equalTo("planet1"))
		// 次の要素は id=2 であり、text が "bar" であること。
		assertThat(todos[1].id, equalTo(2))
		assertThat(todos[1].name, equalTo("planet2"))
	}

}
