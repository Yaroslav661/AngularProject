import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('tableContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  @ViewChild('tableTemplate') tableTemplate!: TemplateRef<any>;

  addDynamicTable() {
    this.container.clear();
    this.container.createEmbeddedView(this.tableTemplate);
  }

  clearTemplate() {
    this.container.clear();
  }
}
