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
  currentQuiz = 1;
  
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.listaPergunta().subscribe(question=>{
      this.question = question;
      console.log(question)
    }, err =>{
      console.log('Não foi possível exibir a pergunta.', err);
    });

    this.quizService.listaOpcoes().subscribe(option=>{
      this.option = option;
      console.log(option)
    }, err =>{
      console.log('Não foi possível exibir as opções.', err);
    });
  }
}
