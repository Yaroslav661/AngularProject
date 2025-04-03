import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css'],
})
export class InlineComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data['title']);

    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="og:url"');

    const metaTags = this.route.snapshot.data['metaTags'];
    metaTags.forEach((tag: any) => {
      this.meta.updateTag(tag);
    });
  }
}
