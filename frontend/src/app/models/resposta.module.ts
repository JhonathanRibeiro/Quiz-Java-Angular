import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RespostaModule {
    opcao_id?: any;
    pergunta_id?: any;
    usuario_id?: any;
    nome?: string;
    tempo_resposta?: number;
 }
