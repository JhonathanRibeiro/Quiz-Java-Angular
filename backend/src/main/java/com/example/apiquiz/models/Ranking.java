package com.example.apiquiz.models;

public class Ranking {
    private String nome_usuario;
    private Long pontos;
    private Long soma_tempo_respostas;

    public Ranking(String nome_usuario, Long pontos, Long soma_tempo_respostas){
        this.nome_usuario = nome_usuario;
        this.pontos = pontos;
        this.soma_tempo_respostas = soma_tempo_respostas;

    }
}
