import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPage} from './films.page';

const routes: Routes = [{ path: '', component: FilmsPage },
{ path: 'new', loadChildren: () => import('./new-film/new-film.module').then(m => m.NewFilmModule) },
{ path: ':id', loadChildren: () => import('./film/film.module').then(m => m.FilmModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
