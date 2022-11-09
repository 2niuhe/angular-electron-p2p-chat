import { TestComponent } from './framework/test/test.component';
import { StartpageComponent } from './framework/startpage/startpage.component';

import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [



     { path: '', redirectTo: '/start', pathMatch: 'full' },
      {
        path: 'start',
        component: StartpageComponent
      },      {
        path: 'test',
        component: TestComponent
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
