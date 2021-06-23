package com.example.apiquiz.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name ="pergunta")
public class Pergunta implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@Column(length=250)
	private String descricao;
	
	@OneToMany
	@JoinColumn(name="pergunta_id")
    private List<Opcao> listaOpcoes;	

	public long getId() {
		return id;
	}

	public List<Opcao> getListaOpcoes() {
		return listaOpcoes;
	}

	public void setListaOpcoes(List<Opcao> listaOpcoes) {
		this.listaOpcoes = listaOpcoes;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
}
