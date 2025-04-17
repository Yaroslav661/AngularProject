import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  onGetPosts() {
    this.apiService.getPosts().subscribe({
      next: data => console.log('GET Posts:', data),
      error: err => console.error('Error:', err)
    });
  }

  onGetComments() {
    this.apiService.getComments().subscribe({
      next: data => console.log('GET Comments:', data),
      error: err => console.error('Error:', err)
    });
  }

  onCreatePost() {
    this.apiService.createPost().subscribe({
      next: data => console.log('POST Created:', data),
      error: err => console.error('Error:', err)
    });
  }

  onGetPostWithError() {
    this.apiService.getPostWithError().subscribe({
      error: err => console.log('Error handled:', err.message)
    });
  }

  onGetPostsWithCustomHeader() {
    this.apiService.getPostsWithCustomHeader().subscribe({
      next: data => console.log('GET with custom header:', data),
      error: err => console.error('Error:', err)
    });
  }

  onDeletePost() {
    this.apiService.deletePost().subscribe({
      next: data => console.log('DELETE Success:', data),
      error: err => console.error('Error:', err)
    });
  }

  navigateToResolvedRoute() {
    this.router.navigate(['/post']);
  }
}
