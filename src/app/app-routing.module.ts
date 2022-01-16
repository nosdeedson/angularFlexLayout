import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { CadastrarComponent } from './layouts/authentication/modules/cadastrar/cadastrar.component';
import { EsqueceuSenhaComponent } from './layouts/authentication/modules/esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './layouts/authentication/modules/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }
  ]
},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'esqueceu-senha',
      component: EsqueceuSenhaComponent
    },
    {
      path: 'cadastrar',
      component: CadastrarComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
