import { SetttingComponent } from './framework/settting/settting.component';
import { AboutMeComponent } from './framework/about-me/about-me.component';

import { StartpageComponent } from './framework/startpage/startpage.component';

import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  {
    path: 'start',
    component: StartpageComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'setting',
    component: SetttingComponent
  },
  {
    path: '**',
    redirectTo: '/start',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
