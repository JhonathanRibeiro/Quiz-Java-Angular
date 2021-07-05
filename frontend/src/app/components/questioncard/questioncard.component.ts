import { RespostaModule } from './../../models/resposta.module';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  public time: number = 30;

  public pergunta: Array<any> = new Array();
  public opcao: Array<any> = new Array();
  public control = new FormControl();

  public resposta: RespostaModule = new RespostaModule();

  public displayElement = true;
  public currentQuiz = 0;
  public count = 1;
  public interval: any;
  public answer: any;
  

  constructor(
    private quizService: QuizService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.autenticacao();
    this.listaPerguntas();
    this.timeQuestion();
  }

  public listaPerguntas() {
    this.quizService.listaPergunta().subscribe(question => {
      this.pergunta = question
    }, err => {
      console.error('Não foi possível exibir a pergunta.', err);
    });
  }

  public onAnswer(): void {
    
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
    console.log('antes' + this.answer);

    console.log('antes1' + this.resposta.opcao_id);
   
    //se a escolha dor indefinido(caso o usuário nao seleciona nenhuma) a opção é salva como null
    if (this.answer == undefined || this.answer == 0) {
      console.log('entrou' + this.answer);
      this.resposta.opcao_id = null;
    }
    //registrando a resposta
    this.quizService.cadastraResposta(this.resposta).subscribe(res => {
      this.resposta = new RespostaModule();

    });
    
    this.answer = 0

    this.currentQuiz++;
    //se a qtde de questoes for maior do que a qtde de perguntas irá redirecionar para a tela de agradecimento
    if (this.currentQuiz >= this.pergunta.length) {
      clearInterval(this.interval);
      this.router.navigate(['/agradecimento']);
    }

    this.time = 30;
  }

  public timeQuestion(): void {
    this.interval = setInterval(() => {
      //Irá exibir o emoji quando o timer estiver em 10seg
      if (this.time <= 11) {
        document.querySelector('#timer')?.classList.add('text-danger')
        document.querySelector('#timer')?.classList.add('ef-pulse-grow')
        document.querySelector('#clock')?.classList.add('display-block')
      } else {
        document.querySelector('#timer')?.classList.remove('text-danger')
        document.querySelector('#timer')?.classList.remove('ef-pulse-grow')
        document.querySelector('#clock')?.classList.remove('display-block')
      }

      if (this.time > 1) {
        this.time--;
      } else {
        if (this.time == 1) {
          this.answer = 0;
          this.onAnswer();
        } else {
          this.currentQuiz++;
        }

        document.querySelector('#timer')?.classList.remove('text-danger')
        document.querySelector('#timer')?.classList.remove('ef-pulse-grow')
        document.querySelector('#clock')?.classList.remove('display-block')

        this.time = 30;

        if (this.currentQuiz == this.pergunta.length) {
          this.router.navigate(['/agradecimento']);
        }
      }
    }, 1000)
  }

  public autenticacao(): void {
    if(localStorage.getItem("id") === null || localStorage.getItem("nome") === null) {
      this.router.navigate(['/login']);
    }
  }
}