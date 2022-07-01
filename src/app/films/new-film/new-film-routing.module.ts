import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFilmPage } from './new-film.page';


const routes: Routes = [{ path: '', component: NewFilmPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFilmRoutingModule { }
