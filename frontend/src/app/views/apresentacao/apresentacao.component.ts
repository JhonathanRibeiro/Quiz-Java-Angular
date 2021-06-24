import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {
  time: number = 5;
  interval: any;

  ngOnInit(): void {
    const startTimer = () => {
      this.interval = setInterval(() => {
        if(this.time > 1) {
          this.time--;
          console.log(`Tempo: ${this.time}`);
        } else {
          window.location.replace("/quiz");
        }
      },1000)
    }
      startTimer();
  }
}
