import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentDate = moment().format('DD.MM.YYYY');
  nextWeekDate = moment().add(7, 'days').format('DD.MM.YYYY');

  constructor(private toastr: ToastrService) {}

  showDates() {
    alert(`Сегодня: ${this.currentDate}\nЧерез неделю: ${this.nextWeekDate}`);
  }

  showSuccess() {
    this.toastr.success('Уведомление работает!', 'Успех');
  }
}
