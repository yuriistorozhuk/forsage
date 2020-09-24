import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { CourseComponent } from './components/course/course.component';
import { CPLComponent } from './components/cpl/cpl.component';
import { PPLComponent } from './components/ppl/ppl.component';
import { SEPComponent } from './components/sep/sep.component';
import { IRComponent } from './components/ir/ir.component';
import { K10Component } from './components/k10/k10.component';
import { At3Component } from './components/at3/at3.component';
import { P2006tComponent } from './components/p2006t/p2006t.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'cpl',
  component: CPLComponent
}, {
  path: 'ppl',
  component: PPLComponent
}, {
  path: 'sep',
  component: SEPComponent,
}, {
  path: 'ir',
  component: IRComponent
}, {
  path: 'k-10',
  component: K10Component
}, {
  path: 'at-3',
  component: At3Component
}, {
  path: 'p2006t',
  component: P2006tComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
