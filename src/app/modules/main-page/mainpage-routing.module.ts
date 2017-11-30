import { NgModule } from '@angular/core';
import { FirstLayoutComponent } from '../../components/first-layout/first-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: '', component: FirstLayoutComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainPageRoutingModule {}
