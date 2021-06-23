import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/quiz.model';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent implements OnInit {

  question: Array<any> = new Array();
  option: Array<any> = new Array();

  pergunta: Array<any> = new Array();
  opcao: Array<any> = new Array();

  count = 1;
  currentQuiz = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.listaPerguntas();
    this.listaOpcoes();
  }

  public listaPerguntas() {
    this.quizService.listaPergunta().subscribe(question => {
      console.log(question)
      this.question = question
    }, err => {
      console.log('Não foi possível exibir a pergunta.', err);
    });
  }

  public listaOpcoes(): void {
    this.quizService.listaOpcoes().subscribe(option => {

      this.option = option;
      option.forEach((el: any) => {
        if (el.pergunta.id == this.count) {
          console.log('opção:', el.descricao)
          this.opcao = el.descricao;
        }
        
      });
    }, err => {
      console.log('Não foi possível exibir as opções.', err);
    });
  }

  public next(): void {

  }


}
