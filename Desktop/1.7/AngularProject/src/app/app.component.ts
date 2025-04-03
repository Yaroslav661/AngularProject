import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({ property: 'og:desc', content: 'root_desc' });
    this.meta.updateTag({ name: 'title', content: 'Desk Page' });
  }
}
