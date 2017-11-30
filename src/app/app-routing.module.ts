import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageModule }    from './modules/main-page/main-page.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    MainPageModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
