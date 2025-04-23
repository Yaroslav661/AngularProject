import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []; 

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
