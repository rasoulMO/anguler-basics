import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habit List</h2>
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add hait" formControlName="title" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habitForm: any;
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

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    });
  }

  onSubmit(newHabit: any) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
    this.habitForm.reset();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
