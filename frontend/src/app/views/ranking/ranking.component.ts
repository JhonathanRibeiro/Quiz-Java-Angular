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
    this.api.listaRanking().subscribe(data => {
      var classificao = data
     
    function retornaVencedores (value: any){
        if (value.posicao >= 1 || value.posicao <= 5)
        return value;
    }

    var vencedores = classificao.filter(retornaVencedores);
    vencedores.forEach((res:any) => { 
        console.log(`Resultado: ${JSON.stringify(res)}`);
    })

      console.log(`Lista de ranking2: ${JSON.stringify(this.ranking)}`)
    }, err => {
      console.log('Não foi possível exibir o ranking.', err);
    });
  }

}