import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookIndexComponent } from './components/book/book-index/book-index.component';
import { BookShowComponent } from './components/book/book-show/book-show.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path: 'books',
//     component: BookComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookIndexComponent,
    BookShowComponent,
    BookCreateComponent,
    HeaderComponent,
    SidepanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
