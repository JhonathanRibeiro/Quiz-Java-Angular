import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-ranking',
  templateUrl: './navbar-ranking.component.html',
  styleUrls: ['./navbar-ranking.component.css']
})
export class NavbarRankingComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.auth.clearStorage();
    this.router.navigate(['/admin/login']);
  }

}
