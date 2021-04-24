import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.scss']
})
export class BookIndexComponent implements OnInit {
  
  books: any[]
  selectedBook: any
  dialog: boolean = false

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fetchBooks()
  }

  fetchBooks(): void {
    this.bookService.fetchBooks()
      .subscribe(
        books => {
          this.books = books
        },
        error => {
          console.log(error)
        }
      )
  }

  created(): void {
    this.fetchBooks()
  }

  selectItem(id) {
    console.log(id)
    this.bookService.showBook(id)
      .then(
        res => {
          console.log(res)
        }
      )
  }

  deleteItem(id) {
    this.bookService.deleteBook(id)
      .subscribe(
        res => {
          console.log(res)
          this.fetchBooks()
        },
        err => {
          console.log(err)
        }
      )
  }

}
