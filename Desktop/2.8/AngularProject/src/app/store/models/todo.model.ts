export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoStateModel {
  todos: TodoItem[];
  loading: boolean;
}

export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public payload: string) {}
}