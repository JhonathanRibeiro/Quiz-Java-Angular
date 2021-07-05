import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public comecar() {
    this.router.navigate(['/apresentacao']);
  }
}
