import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agradecimento',
  templateUrl: './agradecimento.component.html',
  styleUrls: ['./agradecimento.component.css']
})
export class AgradecimentoComponent implements OnInit {
  @Input() public nome: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.nome = this.auth.getStorage('nome');
    
    setTimeout(()=>{
      this.auth.clearStorage();
    }, 2000);
  }

}
