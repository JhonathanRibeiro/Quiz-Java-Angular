import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent implements OnInit {
  @Input() public time: number = 30;
  @Input() public opcaoid: any;

  public pergunta: Array<any> = new Array();
  public opcao: Array<any> = new Array();
  public control = new FormControl();

  public displayElement = true;
  public respostas = [];
  public currentQuiz = 0;
  public count = 1;
  public interval: any;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.listaPerguntas();
    this.timeQuestion();
  }

  public listaPerguntas() {
    this.quizService.listaPergunta().subscribe(question => {
      this.pergunta = question
    }, err => {
      console.log('Não foi possível exibir a pergunta.', err);
    });
  }

  public onAnswer(option: number): void {
    this.currentQuiz++;

    if (this.currentQuiz >= this.pergunta.length) {
      setTimeout(() => {
        window.location.replace("/agradecimento");
      }, 1000)
    }
    console.log('Escolha: ', option)
  }

  public timeQuestion(): void {
    this.interval = setInterval(() => {
      if (this.time > 1) {
        this.time--;
        console.log(`Tempo: ${this.time}`);
      } else {
        this.time = 30;
        this.currentQuiz++;
        if (this.currentQuiz == this.pergunta.length) {
          window.location.replace("/agradecimento");
        }
      }
    }, 1000)
  }
}
