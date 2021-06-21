package com.example.apiquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apiquiz.models.Opcao;

public interface OpcaoRepository extends JpaRepository<Opcao, Long>{
	Opcao findById(long id);
}