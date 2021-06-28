import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public ranking: Array<any> = new Array();

  constructor() { }

  ngOnInit(): void {
    this.ranking = [
      {
        player1: {
          nome: "Jhonathan Ribeiro",
          score: 30,
          tempo_resposta: 12
        },
        player2: {
          nome: "Isabella Veigas",
          score: 16,
          tempo_resposta: 15
        },
        player3: {
          nome: "Erick Borges",
          score: 14,
          tempo_resposta: 13
        },
        player4: {
          nome: "Roberson Rech",
          score: 13,
          tempo_resposta: 18
        },
        player5: {
          nome: "Jhonathan Ribeiro",
          score: 11,
          tempo_resposta: 16
        }
      }
    ];

    console.log(this.ranking)
  }

}
