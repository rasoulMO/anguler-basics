import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-habit-list></app-habit-list>
  `,
  styles: [],
})
export class AppComponent {
  title = 'egghead-angular';
}
