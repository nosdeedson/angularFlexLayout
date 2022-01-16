import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './modules/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarComponent } from './modules/cadastrar/cadastrar.component';
import { EsqueceuSenhaComponent } from './modules/esqueceu-senha/esqueceu-senha.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    CadastrarComponent,
    EsqueceuSenhaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
