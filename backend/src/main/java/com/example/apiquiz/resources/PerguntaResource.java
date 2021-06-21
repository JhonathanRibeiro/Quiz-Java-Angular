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

import com.example.apiquiz.models.Pergunta;
import com.example.apiquiz.repository.PerguntaRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/api")
@Api(value="API REST Quiz App")
@CrossOrigin(origins="*")
public class PerguntaResource {

	@Autowired
	PerguntaRepository perguntaRepository;
	
	@GetMapping("/perguntas")
	@ApiOperation(value="Retorna uma lista de perguntas")
	public List<Pergunta> listaPerguntas(){
		return perguntaRepository.findAll();
	}
	
	@GetMapping("/pergunta/{id}")
	@ApiOperation(value="Retorna uma pergunta específica")
	public Pergunta listaUmaPergunta(@PathVariable(value="id") long id){
		return perguntaRepository.findById(id);
	}
	
	@PostMapping("/pergunta")
	@ApiOperation(value="Cadastra uma nova pergunta")
	public Pergunta salvaPergunta(@RequestBody Pergunta pergunta) {
		return perguntaRepository.save(pergunta);
	}
	
	// Deletando pergunta
	@DeleteMapping("/pergunta")
	@ApiOperation(value="Deleta uma pergunta")
	public void deletaPergunta(@RequestBody Pergunta pergunta) {
		perguntaRepository.delete(pergunta);
	}

	// Editando pergunta
	@PutMapping("/pergunta")
	@ApiOperation(value="Atualiza uma pergunta")
	public Pergunta editaPergunta(@RequestBody Pergunta pergunta) {
		return perguntaRepository.save(pergunta);
	}
}
