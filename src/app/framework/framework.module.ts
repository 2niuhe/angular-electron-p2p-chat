import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageShellComponent } from './page-shell/page-shell.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { SetttingComponent } from './settting/settting.component';



@NgModule({
  declarations: [
    PageShellComponent,
    StartpageComponent,
    AboutMeComponent,
    SetttingComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    PageShellComponent,
    StartpageComponent,
    AboutMeComponent,
    SetttingComponent
  ]
})
export class FrameworkModule { }
