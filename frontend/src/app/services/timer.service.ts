import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  @Input() public time: number = 0;

  public visibility: boolean = false;

  constructor() { }

  public countdown(interval: any,time: number, currentQuiz: number, pergunta: any ): void {
    interval = setInterval(() => {
      if (time > 1) {
        time--;
        console.log(`Tempo: ${time}`);
      } else {
        time = 30;
        currentQuiz++;
        if (currentQuiz == pergunta.length) {
          window.location.replace("/agradecimento");
        }
      }
    }, 1000)
  }



}
