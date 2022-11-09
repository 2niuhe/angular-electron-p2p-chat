import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageShellComponent } from './page-shell/page-shell.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    PageShellComponent,
    StartpageComponent,
    TestComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    PageShellComponent,
    StartpageComponent,
    TestComponent
  ]
})
export class FrameworkModule { }
