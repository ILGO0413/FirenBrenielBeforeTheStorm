import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ReaderComponent} from './reader/reader.component';
import {ChaptersComponent} from './chapters/chapters.component';

export const routes: Routes = [
  { path: '',         redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent },
  { path: 'chapters', component: ChaptersComponent },
  { path: 'reader',   component: ReaderComponent },
  { path: '**',       redirectTo: 'home' }
];
