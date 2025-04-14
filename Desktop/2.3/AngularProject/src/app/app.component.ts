import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sequentialNumbers: number[] = [];
  randomNumbers: string[] = [];

  constructor() {}

  sequentialSub$!: Subscription;
  randomSub$!: Subscription;

  isSequentialActive = false;
  isRandomActive = false;

  startSequentialStream() {
    this.isSequentialActive = true;
    this.sequentialSub$ = interval(2000)
      .pipe(map(val => val + 1))
      .subscribe((value) => {
        this.sequentialNumbers.push(value);
      });
  }
  startRandomStream() {
    this.isRandomActive = true;
    this.randomSub$ = interval(2000)
      .pipe(
        map(() => Math.floor(Math.random() * 1000)),
        map((num) => `Random Value: ${num}`)
      )
      .subscribe((value) => {
        this.randomNumbers.push(value);
      });
  }
  stopSequentialStream() {
    this.sequentialSub$.unsubscribe();
    this.isSequentialActive = false;
  }

  stopRandomStream() {
    this.randomSub$.unsubscribe();
    this.isRandomActive = false;
  }
}
