import { LoginAdminComponent } from './views/admin/account/login-admin/login-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestioncardComponent } from './components/questioncard/questioncard.component';
import { AgradecimentoComponent } from './views/agradecimento/agradecimento.component';
import { ApresentacaoComponent } from './views/apresentacao/apresentacao.component';
import { LoginComponent } from './views/login/login.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { RegrasComponent } from './views/regras/regras.component';
import { AdminComponent } from './views/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path:'login', component: LoginComponent },
  { path:'apresentacao', component: ApresentacaoComponent },
  { path: 'regras', component: RegrasComponent },
  
  { path:'quiz', component: QuestioncardComponent },
  { path:'agradecimento', component: AgradecimentoComponent },
  
  { path: 'admin/resultado', component: AdminComponent},
  { path: 'admin/login', component: LoginAdminComponent},
  { path: 'admin/ranking', component: RankingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
