import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TodoStateModel, AddTodo, TodoItem } from './models/todo.model';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
    loading: false
  }
})
export class TodoState {
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  @Selector()
  static isLoading(state: TodoStateModel) {
    return state.loading;
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    ctx.patchState({ loading: true });    
    
    setTimeout(() => {
      const state = ctx.getState();
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        createdAt: new Date()
      };
      
      ctx.patchState({
        todos: [...state.todos, newTodo],
        loading: false
      });
    }, 300);
  }
}