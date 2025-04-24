import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoState } from './store/todo.state';
import { TodoItem, AddTodo } from './store/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(TodoState.getTodos) todos$!: Observable<TodoItem[]>;
  @Select(TodoState.isLoading) isLoading$!: Observable<boolean>;
  
  newTodo = '';

  constructor(private store: Store) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.store.dispatch(new AddTodo(this.newTodo));
      this.newTodo = '';
    }
  }

  trackByFn(index: number, item: TodoItem) {
    return item.id;
  }
}