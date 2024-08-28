import { Component, OnDestroy, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {of, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit, OnDestroy{

  name = 'Angular';
  sub !: Subscription;

  ngOnDestroy(): void {
throw new Error('Method not implemented.');
}
ngOnInit(): void {
  this.sub = of(2,4,6,8).subscribe(
    item => console.log('Value from of::', item
    )
  );
}
}

bootstrapApplication(App);
