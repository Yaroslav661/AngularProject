import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(): Observable<any> {
    const params = new HttpParams().set('postId', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params });
  }

  createPost(): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
  }

  getPostWithError(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/post').pipe(
      catchError(error => {
        console.error('Произошла ошибка:', error.message);
        throw error;
      })
    );
  }

  getPostsWithCustomHeader(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Test': '1',
      'Accept': 'text/plain'
    });
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      headers,
      responseType: 'text'
    });
  }

  deletePost(): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

  getPostForResolve(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}