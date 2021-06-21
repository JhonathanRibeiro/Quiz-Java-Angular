package com.example.apiquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apiquiz.models.Resposta;

public interface RespostaRepository extends JpaRepository<Resposta, Long>{
	Resposta findById(long id);
}
