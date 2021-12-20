import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})

export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Read a book',
      count: 1,
    },

    {
      id: 2,
      title: 'Read 1 a book',
      count: 2,
    },
    {
      id: 3,
      title: 'Read 2 a book',
      count: 3,
    },
    {
      id: 4,
      title: 'Read 3 a book',
      count: 4,
    },
    {
      id: 5,
      title: 'Read 4 a book',
      count: 6,
    }
  ];

  constructor() { }

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit: any) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
