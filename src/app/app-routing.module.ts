import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {path:'',component:HomePage},
  { path: 'auth/register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule) },
  { path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
