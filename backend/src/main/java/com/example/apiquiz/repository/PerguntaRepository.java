package com.example.apiquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apiquiz.models.Pergunta;

public interface PerguntaRepository extends JpaRepository<Pergunta, Long>{
	Pergunta findById(long id);
}
