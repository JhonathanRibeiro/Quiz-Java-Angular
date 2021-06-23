import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { QuestioncardComponent } from './components/questioncard/questioncard.component';
import { RegrasComponent } from './views/regras/regras.component';
import { LoginComponent } from './views/login/login.component';
import { AgradecimentoComponent } from './views/agradecimento/agradecimento.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { ApresentacaoComponent } from './views/apresentacao/apresentacao.component';

import { QuizService } from './quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './views/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestioncardComponent,
    RegrasComponent,
    LoginComponent,
    AgradecimentoComponent,
    RankingComponent,
    ApresentacaoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule,QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
