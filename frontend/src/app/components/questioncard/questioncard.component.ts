import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent implements OnInit {

  pergunta: Array<any> = new Array();
  opcao: Array<any> = new Array();

  control = new FormControl();

  public respostas = [];

  count = 1;
  currentQuiz = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.listaPerguntas();
  }

  public listaPerguntas() {
    this.quizService.listaPergunta().subscribe(question => {
      this.pergunta = question

      question.forEach((el:any) => {
          console.log('elemento:', el)
      });

      console.log('Perguntas', this.pergunta)
    }, err => {
      console.log('Não foi possível exibir a pergunta.', err);
    });
  }

  public next(): void {

  }


}
