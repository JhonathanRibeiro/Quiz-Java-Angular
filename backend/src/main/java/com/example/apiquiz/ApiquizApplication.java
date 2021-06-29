package com.example.apiquiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class ApiquizApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiquizApplication.class, args);
	}

}
