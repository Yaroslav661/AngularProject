import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post = this.route.snapshot.data['post'];
    console.log('Resolved post data:', this.post);
  }
}