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

import com.example.apiquiz.models.Opcao;
import com.example.apiquiz.repository.OpcaoRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/api")
@Api(value="API REST Quiz App")
@CrossOrigin(origins="*")
public class OpcaoResource {

	@Autowired
	OpcaoRepository opcaoRepository;

	// lista todas as opcoes
	@GetMapping("/opcoes")
	@ApiOperation(value="Retorna as opções de cada pergunta")
	public List<Opcao> listaOpcoes() {
		return opcaoRepository.findAll();
	}

	// lista opcao especifica
	@GetMapping("/opcao/{id}")
	@ApiOperation(value="Retorna uma opção específica")
	public Opcao listaUmaOpcao(@PathVariable(value = "id") long id) {
		return opcaoRepository.findById(id);
	}

	// cadastro de pergunta
	@PostMapping("/opcao")
	@ApiOperation(value="Salva uma opção")
	public Opcao salvaOpcao(@RequestBody Opcao opcao) {
		return opcaoRepository.save(opcao);
	}

	// Deletando opcao
	@DeleteMapping("/opcao")
	@ApiOperation(value="Deleta uma opção")
	public void deletaOpcao(@RequestBody Opcao opcao) {
		opcaoRepository.delete(opcao);
	}

	// Editando opcao
	@PutMapping("/opcao")
	@ApiOperation(value="Atualiza uma opção")
	public Opcao editaOpcao(@RequestBody Opcao opcao) {
		return opcaoRepository.save(opcao);
	}
}
