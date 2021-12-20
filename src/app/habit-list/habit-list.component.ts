import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habit List</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits | async"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habits: Observable<Habit[]> | any;

  constructor(private habitService: HabitService) { }

  onAddHabit(newHabit: any) {
    this.habitService.addHabit(newHabit);
  }

  ngOnInit(): void {
    this.habits = this.habitService.getHabits().pipe(map(habits => {
      return habits.map(habit => {
        habit.streak = habit.count > 4 ? true : false;
        return habit;
      });
    }));
  }
}