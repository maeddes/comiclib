package com.mwt.comiclib;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.mwt.comiclib", "com.mwt.model", "com.mwt.repository"})
public class ComiclibApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComiclibApplication.class, args);
	}

}
