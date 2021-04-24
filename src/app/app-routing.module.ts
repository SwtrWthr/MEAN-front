import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookIndexComponent } from './components/book/book-index/book-index.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
