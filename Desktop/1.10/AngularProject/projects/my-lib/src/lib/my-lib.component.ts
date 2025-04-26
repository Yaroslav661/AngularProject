import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let col of columns">{{col}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of data">
          <td *ngFor="let col of columns">{{item[col]}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  `]
})
export class MyLibComponent {
  @Input() data: any[] = [
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 }
  ];

  @Input() columns: string[] = ['id', 'name', 'value'];
}