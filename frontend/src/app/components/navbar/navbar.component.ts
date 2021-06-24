import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() public time: number = 30;
  @Input() public displayElement: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
