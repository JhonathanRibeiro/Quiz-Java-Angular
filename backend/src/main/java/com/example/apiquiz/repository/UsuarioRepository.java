package com.example.apiquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apiquiz.models.Usuario;

public interface UsuarioRepository  extends JpaRepository<Usuario, Long>{
	Usuario findById(long id);
}
