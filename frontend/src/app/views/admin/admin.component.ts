import { QuizService } from 'src/app/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(api: QuizService) { }

  ngOnInit(): void {
  }

  listar() {

  }

  cadastrar() {

  }

  atualizar() {

  }

  remover() {

  }

}
