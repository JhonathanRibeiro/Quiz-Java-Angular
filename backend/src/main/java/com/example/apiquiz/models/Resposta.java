package com.example.apiquiz.models;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name ="resposta")
public class Resposta implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@ManyToOne
	@JoinColumn(name = "opcao_id")
	private Opcao opcao_id;
	
	@ManyToOne
	@JoinColumn(name = "pergunta_id")
	private Pergunta pergunta_id;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Pergunta usuario_id;
	
	private BigDecimal tempo_resposta;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Opcao getOpcao_id() {
		return opcao_id;
	}

	public void setOpcao_id(Opcao opcao_id) {
		this.opcao_id = opcao_id;
	}

	public Pergunta getPergunta_id() {
		return pergunta_id;
	}

	public void setPergunta_id(Pergunta pergunta_id) {
		this.pergunta_id = pergunta_id;
	}

	public Pergunta getUsuario_id() {
		return usuario_id;
	}

	public void setUsuario_id(Pergunta usuario_id) {
		this.usuario_id = usuario_id;
	}

	public BigDecimal getTempo_resposta() {
		return tempo_resposta;
	}

	public void setTempo_resposta(BigDecimal tempo_resposta) {
		this.tempo_resposta = tempo_resposta;
	}
}
