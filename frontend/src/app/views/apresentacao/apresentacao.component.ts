import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {
  time: number = 5;
  interval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const startTimer = () => {
      this.interval = setInterval(() => {
        if(this.time > 1) {
          this.time--;
        } else {
          clearInterval(this.interval);
          this.router.navigate(['/quiz']);
        }
      },1000)
    }
      startTimer();
  }
}
