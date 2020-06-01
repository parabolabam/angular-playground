import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RteComponent } from './playground/RichTextEditor/rte.component';

const routes: Routes = [
  { path: '', component: RteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
