import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  visibility = false;
  time = 0;
  
  constructor(timeservice: TimerService) { }

  ngOnInit(): void {}

}
