import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmView } from "./film.view";

const routes: Routes = [{ path: '', component: FilmView }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
