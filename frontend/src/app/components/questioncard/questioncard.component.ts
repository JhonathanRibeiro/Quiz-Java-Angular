import { RespostaModule } from './../../models/resposta.module';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent implements OnInit {
  @Input() public opcaoid: number = 0;
  
  public time: number = 15;

  public pergunta: Array<any> = new Array();
  public opcao: Array<any> = new Array();
  public control = new FormControl();

  public resposta: RespostaModule = new RespostaModule();

  public displayElement = true;
  public currentQuiz = 0;
  public count = 1;
  public interval: any;
  public answer:any;

  constructor(
    private quizService: QuizService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.listaPerguntas();
    // this.timeQuestion();
  }

  public listaPerguntas() {
    this.quizService.listaPergunta().subscribe(question => {
      this.pergunta = question
      console.log(this.pergunta)
    }, err => {
      console.log('Não foi possível exibir a pergunta.', err);
    });
  }

  public onAnswer(): void {
    this.currentQuiz++;
    
    this.resposta = {
      usuario: {
        id: this.auth.getStorage('id')
      },
      pergunta: {
        id: this.pergunta[this.currentQuiz].id
      },
      opcao: {
        id: parseInt(this.answer)
      },
      tempo_resposta: this.time
    }

    this.quizService.cadastraResposta(this.resposta).subscribe(res =>{
      this.resposta = new RespostaModule();
    });

    if (this.currentQuiz >= this.pergunta.length) {
      setTimeout(() => {
        window.location.replace("/agradecimento");
      }, 500)
    }

    this.time = 30;
    console.log('Escolha: ', this.resposta)
  }

  public timeQuestion(): void {
    this.interval = setInterval(() => {
      
      if (this.time > 1) {
        this.time--;
        // console.log(`Tempo: ${this.time}`);
      } else {
        this.time = 30;
        this.currentQuiz++;
        if (this.currentQuiz == this.pergunta.length) {
          window.location.replace("/agradecimento");
        }
      }
    }, 1000)

    if(this.time == 10) {
      document.querySelector('#timer')?.classList.add('text-danger')
    } else {
      document.querySelector('#timer')?.classList.add('text-light')
    }

  }
}
