import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component'

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
