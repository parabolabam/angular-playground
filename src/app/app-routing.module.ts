import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RteComponent } from './playground/RichTextEditor/rte.component';
import { BreakOutComponent } from './games/break-out/break-out.component';

const routes: Routes = [
  { path: '', component: RteComponent },
  { path: 'game',
    children: [
      { path: 'break-out', component: BreakOutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
