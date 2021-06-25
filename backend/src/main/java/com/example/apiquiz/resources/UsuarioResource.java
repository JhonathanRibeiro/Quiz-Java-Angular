package com.example.apiquiz.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apiquiz.models.Usuario;
import com.example.apiquiz.repository.UsuarioRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value ="/api")
@Api(value="API REST Quiz App")
@CrossOrigin(origins="*")
public class UsuarioResource {

	@Autowired
	UsuarioRepository usuarioRepository;

	// Listando todos os usuários
	@GetMapping("/usuarios")
	@ApiOperation(value="Retorna uma lista de usuários")
	public List<Usuario> listaUsuarios() {
		return usuarioRepository.findAll();
	}

	/* Listando um usuário específico */
	@GetMapping("/usuario/{id}")
	@ApiOperation(value="Retorna um usuário específico")
	public Usuario listaUmUsuario(@PathVariable(value = "id") long id) {
		return usuarioRepository.findById(id);
	}

	// cadastra usuário
	@PostMapping("/usuario")
	@ApiOperation(value="Salva um usuário")
	public Usuario salvaUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	// Deletando usuário
	@DeleteMapping("/usuario")
	@ApiOperation(value="Deleta um usuário")
	public void deletaUsuario(@RequestBody Usuario usuario) {
		usuarioRepository.delete(usuario);
	}

	// Editando usuário
	@PutMapping("/usuario")
	@ApiOperation(value="Atualiza um usuário")
	public Usuario editaUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

}
