import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
const baseURL = 'http://localhost:4040/api/';
@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  fetchBooks(): Observable<any> {
    return this.http.get(`${baseURL}books`)
  }

  createBook(book): Observable<any> {
    return this.http.post(`${baseURL}books`, book)
  }

  showBook(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${baseURL}book/${id}`)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteBook(id) {
    return this.http.delete(`${baseURL}book/${id}`)
  }
}
