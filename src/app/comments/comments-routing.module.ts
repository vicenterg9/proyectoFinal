import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsPage } from './comments.page';

const routes: Routes = [{ path: '', component: CommentsPage },
                        { path: 'new', loadChildren: () => import('./new-comment/new-comment.module').then(m => m.NewCommentModule)},
                        { path: 'comment/:id', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
