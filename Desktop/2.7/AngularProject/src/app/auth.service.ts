import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roleSubject = new BehaviorSubject<'user' | 'admin'>('user');  
  
  currentRole$ = this.roleSubject.asObservable();

  constructor(private http: HttpClient) {}
  
  isAdmin(): boolean {
    return this.roleSubject.value === 'admin';
  }
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=2');
  }
  
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  
  toggleRole() {
    const newRole = this.roleSubject.value === 'user' ? 'admin' : 'user';
    this.roleSubject.next(newRole);
  }
}