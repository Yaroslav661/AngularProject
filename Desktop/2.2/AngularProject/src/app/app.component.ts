import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from './interfaces/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books: Book[] = [
    { id: 1, title: 'ВойнаиМир', author: 'Толстой' },
    { id: 2, title: 'ПреступлениеиНаказание', author: 'Достоевский' },
  ];

  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁё]+$/)]],
      author: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁё]+$/)]],
    });
  }

  addBook(): void {
    if (this.bookForm.valid) {
      const newBook: Book = {
        id: this.books.length + 1,
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
      };

      this.books.push(newBook);
      this.bookForm.reset();
    }
  }

  get title() {
    return this.bookForm.get('title')!; 
  }
  
  get author() {
    return this.bookForm.get('author')!;
  }
}
