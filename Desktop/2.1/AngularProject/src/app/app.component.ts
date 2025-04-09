import { Component } from '@angular/core';
import { ResponseService } from './services/response.service';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];

  constructor(private responseService: ResponseService) {
    this.tasks = this.responseService.getTasks();
  }
}
