import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public rankingTotal: Array<any> = new Array();
  public vencedores: Array<any> = new Array();
  public classificacao: Array<any> = new Array();

  public primeiro: any = {};
  public segundo: any = {};
  public terceiro: any = {};
  public quarto: any = {};
  public quinto: any = {};

  constructor(private api: QuizService) { }

  ngOnInit(): void {
    this.getlistaRanking();
  }

  public getlistaRanking(): void {
    this.api.listaRanking().subscribe(data => {
      this.rankingTotal = data;
      this.getListaVencedores();
      this.getListaDemaisParticipantes();

      this.vencedores.forEach((v: any) => {
        if (v.posicao == 1) {
          this.primeiro = {
            nome: v.nome,
            pontos: v.pontos
          }
        } else if (v.posicao == 2) {
          this.segundo = {
            nome: v.nome,
            pontos: v.pontos
          }
        } else if (v.posicao == 3) {
          this.terceiro = {
            nome: v.nome,
            pontos: v.pontos
          }
        } else if (v.posicao == 4) {
          this.quarto = {
            nome: v.nome,
            pontos: v.pontos
          }
        } else if (v.posicao == 5) {
          this.quinto = {
            nome: v.nome,
            pontos: v.pontos
          }
        }
      });
    }, err => {
      console.log('Não foi possível exibir o ranking.', err);
    });
  }

  public getListaVencedores() {
    this.vencedores = this.rankingTotal.filter(this.getCincoPrimeiros);
  }

  public getListaDemaisParticipantes() {
    this.classificacao = this.rankingTotal.filter(this.getDemaisParticipantes);
  }

  public getCincoPrimeiros(value: any) {
    return (value.posicao <= 5);
  }

  public getDemaisParticipantes(value: any) {
    return (value.posicao > 5);
  }

}