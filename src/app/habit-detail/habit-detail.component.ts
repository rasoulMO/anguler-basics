import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-detail',
  template: `
    <h2>Habit Detail</h2>
    <ul>
      <li *ngFor="let habit of habits">{{ habit.title }}</li>
    </ul>
    <p>habit-detail works!</p>
  `,
  styles: [],
})
export class HabitDetailComponent implements OnInit {
  habits = [
    {
      id: 1,
      title: 'Read a book',
    },
    {
      id: 2,
      title: 'Read 1 a book',
    },
    {
      id: 3,
      title: 'Read 2 a book',
    },
    {
      id: 4,
      title: 'Read 3 a book',
    },
    {
      id: 5,
      title: 'Read 4 a book',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
