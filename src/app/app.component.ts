import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddFivePipe } from './add-five.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, AddFivePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: any = [
    { name: 'Петя', age: 30, city: 'Саранск' },
    { name: 'Ваня', age: 25, city: 'Москва' },
    { name: 'Леша', age: 40, city: 'Пенза' }
  ];

  today: Date = new Date();

  myNumber: number = 10;
}

