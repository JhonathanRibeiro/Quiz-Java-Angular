import { QuizService } from 'src/app/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public resultado: Array<any> = new Array();
  public participantes: any = {};

  public tempo: any = {};

  constructor(private api: QuizService) { }

  ngOnInit(): void {
    this.getResultado();
  }

  public getResultado(): void {
    this.api.listaRanking().subscribe(data => {
      this.resultado = data;
      this.tempo = this.setCalculoTempo(data.soma_tempo_respostas),

      console.log(`Ranking: ${JSON.stringify(this.resultado)}`)
    }, err => {
      console.log('Não foi possível exibir o resultado.', err);
    });
  }

  public setCalculoTempo(value: any) {
    return (value.soma_tempo_respostas - 450 / 60);
  }


}
