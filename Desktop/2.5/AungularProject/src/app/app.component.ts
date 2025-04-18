import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoData: any;
  error: string | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodo();
  }

  loadTodo() {
    this.todoService.getTodo(1).subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.todoData = data;
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Failed to load data';
      }
    });
  }
}