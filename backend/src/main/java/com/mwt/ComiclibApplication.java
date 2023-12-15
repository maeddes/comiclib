package com.mwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.mwt.repository")
@ComponentScan(basePackages = {"com.mwt.controller", "com.mwt.model", "com.mwt.repository"})
public class ComiclibApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComiclibApplication.class, args);
	}

}
