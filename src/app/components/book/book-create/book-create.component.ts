import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  book = {
    title: '',
    author: '',
    isbn: '',
    price: '',
    year: '',
    quantity: ''
  }

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>()
  @Output() canceled: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.canceled.emit()
  }

  createBook(): void {
    console.log(this.book)
    this.bookService.createBook(this.book)
      .subscribe(
        res => {
          console.log(res)
          this.book = {
            title: '',
            author: '',
            isbn: '',
            price: '',
            year: '',
            quantity: ''
          }
          this.clicked.emit(true)
          this.canceled.emit()
        },
        error => {
          console.log(error)
        }
      )
  }

}
