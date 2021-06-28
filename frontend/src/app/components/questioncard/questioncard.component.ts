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

  public obj_opcao = {
    id: null
  }
  
  public time: number = 15000;

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
    this.timeQuestion();
  }

  public listaPerguntas() {
    this.quizService.listaPergunta().subscribe(question => {
      this.pergunta = question
      console.log(`Perguntas: ${this.pergunta}`)
    }, err => {
      console.log('Não foi possível exibir a pergunta.', err);
    });
  }

  public onAnswer(): void {   
    console.log(`Perguntas onAnswer: ${this.pergunta}`)

    this.resposta = {
      opcao_id: {
        id: parseInt(this.answer)
      },
      pergunta_id: {
        id: this.pergunta[this.currentQuiz].id
      },
      usuario_id: {
        id: this.auth.getStorage('id')
      },
      tempo_resposta: this.time
    }
    
    if(this.answer == undefined) {
      this.resposta.opcao_id = null;
    } 

    this.quizService.cadastraResposta(this.resposta).subscribe(res =>{
      this.resposta = new RespostaModule();
    });
    
    this.currentQuiz++;
    
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
      
      if(this.time <=  11) {
        document.querySelector('#timer')?.classList.add('text-danger')
        document.querySelector('#clock')?.classList.add('display-block')
      }

      if (this.time > 1) {
        this.time--;
        // console.log(`Tempo: ${this.time}`);
      } else {
        
        if(this.time == 1) {
          this.onAnswer();
        } else {
          this.currentQuiz++;
        }

        document.querySelector('#timer')?.classList.remove('text-danger')
        document.querySelector('#clock')?.classList.remove('display-block')

        this.time = 30;

        if (this.currentQuiz == this.pergunta.length) {
          window.location.replace("/agradecimento");
        }
      }
    }, 1000)

  }
}