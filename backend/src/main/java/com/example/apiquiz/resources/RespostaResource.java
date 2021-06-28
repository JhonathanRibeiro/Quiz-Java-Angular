package com.example.apiquiz.resources;

import java.util.List;

import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apiquiz.models.Resposta;
// import com.example.apiquiz.repository.RankingRepository;
import com.example.apiquiz.repository.RespostaRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/api")
@Api(value="API REST Quiz App")
@CrossOrigin(origins="*")
public class RespostaResource {
	
	// @Autowired
	// RankingRepository rankingRepository;
	
	@Autowired
	RespostaRepository respostaRepository;
	
	@GetMapping("/respostas")
	@ApiOperation(value="Retorna uma lista com as respostas de todos os usuários")
	public List<Resposta> listaRespostas(){
		return respostaRepository.findAll();
	}
	
	@GetMapping("/resposta/{id}")
	@ApiOperation(value="Retorna a resposta de um usuário específico")
	public Resposta listaUmaResposta(@PathVariable(value="id") long id){
		return respostaRepository.findById(id);
	}

	@PostMapping("/resposta")
	@ApiOperation(value="Cadastra uma resposta")
	public Resposta salvaResposta(@RequestBody Resposta resposta) {
		return respostaRepository.save(resposta);
	}

	// @GetMapping("/ranking")
	// @ApiOperation(value="Retorna um lista com o ranking")
	// public List<Resposta> rankingList(){
	// 	return rankingRepository.findByRanking();
	// }

}
