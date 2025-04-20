import { Component } from '@angular/core';

interface TableRow {
  id: number;
  name: string;
  age: number;
  occupation: string;
  [key: string]: any; 
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  tableData: TableRow[] = [
    { id: 1, name: 'Иван', age: 25, occupation: 'Разработчик' },
    { id: 2, name: 'Мария', age: 30, occupation: 'Дизайнер' },
    { id: 3, name: 'Алексей', age: 28, occupation: 'Менеджер' },
    { id: 4, name: 'Елена', age: 35, occupation: 'Аналитик' }
  ];

  columns: string[] = ['id', 'name', 'age', 'occupation'];
}
