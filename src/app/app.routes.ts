// app.routes.ts

import { Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ReaderComponent } from './reader/reader.component';
import { AboutComponent }  from './about/about.component';
import { AuthorComponent } from './author/author.component';

export const routes: Routes = [
  { path: '',        redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',    component: HomeComponent },
  { path: 'reader',  component: ReaderComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'author',  component: AuthorComponent },
  { path: '**',      redirectTo: 'home' }
];
