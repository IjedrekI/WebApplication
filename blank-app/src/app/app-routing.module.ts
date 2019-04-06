import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMoveComponent } from './new-move/new-move.component';

const routes: Routes = [
  {
    path: 'newMove',
    component: NewMoveComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
