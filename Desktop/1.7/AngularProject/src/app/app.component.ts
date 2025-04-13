import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Desk Page');

    this.meta.updateTag({ property: 'og:description', content: 'root_desc' });
    this.meta.updateTag({
      name: 'description',
      content: 'Desk Page Description',
    });
  }
}
