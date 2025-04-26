import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customData = [
    { id: 1, product: 'Phone', price: 500 },
    { id: 2, product: 'Laptop', price: 1200 }
  ];
  displayedColumns = ['id', 'product', 'price'];
}
