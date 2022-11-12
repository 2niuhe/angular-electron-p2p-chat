import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsstorageService } from '../../core/services/electron/fsstorage.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-shell',
  templateUrl: './page-shell.component.html',
  styleUrls: ['./page-shell.component.scss']
})
export class PageShellComponent implements OnInit {
  value = '';

  downloadUrl = '';
  sidopen = false;
  theme = '';

  arr = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(map(result => result.matches));
  constructor(private router: Router, private breakpointObserver: BreakpointObserver,
    private httpClient: HttpClient, private fsstorageService: FsstorageService) { }

  ngOnInit(): void {

  }
  openGoogle($event) {
    window.open('https://www.google.com');
  }

  switchLang($event) {
    if (window.localStorage['language-option'] === 'en') {
          window.localStorage.setItem('language-option', 'zh');
        } else {
          window.localStorage.setItem('language-option', 'en');

        }

    window.location.reload();

  }

  foo(): void {
    this.sidopen = !this.sidopen;
  }

  downloadhandler($event): void {
    console.log('download');
    console.log(this.downloadUrl);
    console.log($event);
    this.httpClient.get(this.downloadUrl, {responseType: 'text'}).subscribe({
      next: (res) => {
        console.log('httpclient success');
        console.log(res);
      },
      error: (err) => {console.log(err);}
    }
    );
    // fetch(this.downloadUrl).then((res: Response)=>{
    //   console.log('foo');
    //   this.fsstorageService.set('kang', 'shit');
    // });
  }

  onSubmit($event): void {
    console.log('submit');
    console.log($event);
  }

  empty($event) {
    this.downloadUrl = '';
  }

}
