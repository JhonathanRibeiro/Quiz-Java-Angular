import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public ranking: Array<any> = new Array();

  constructor(private api: QuizService) { }

  ngOnInit(): void {
    this.listaRanking();
  }

  public listaRanking(): void {
    this.api.listaPergunta().subscribe(data => {
      this.ranking = data
      
      console.log(`Perguntas: ${data}`)
    }, err => {
      console.log('Não foi possível exibir o ranking.', err);
    });
  }

}