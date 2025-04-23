import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: any;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.authService.getPost(Number(id)).subscribe(post => {
      this.post = post;
    });
  }
  
  saveChanges() {
    if (!this.authService.isAdmin()) {
      this.errorMessage = 'Ошибка: у вас нет прав для сохранения изменений.';
      return;
    }

    this.errorMessage = null;
    alert('Изменения сохранены!');
  }
}