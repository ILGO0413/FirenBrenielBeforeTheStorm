import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  computed,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { COMIC_CONFIG } from '../comic.config';
import { ReaderNavComponent } from './reader-nav/reader-nav.component';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css'],
  standalone: true,
  imports: [ReaderNavComponent],
})
export class ReaderComponent implements OnInit, OnDestroy {


  readonly totalPages = COMIC_CONFIG.totalPages;
  readonly pages = Array.from({ length: this.totalPages }, (_, i) => `pages/1-${i + 1}.png`);

  currentPage = signal(0);
  currentPageUrl = computed(() => this.pages[this.currentPage()]);

  private keyboardSub!: Subscription;

  ngOnInit(): void {
    this.keyboardSub = fromEvent<KeyboardEvent>(document, 'keydown')
      .subscribe(e => this.onKeydown(e));
  }

  ngOnDestroy(): void {
    this.keyboardSub?.unsubscribe();
  }

  goFirst(): void {
    this.currentPage.set(0);
    this.scrollToTop();
  }

  goPrev(): void {
    if (this.currentPage() > 0) {
      this.currentPage.update(p => p - 1);
      this.scrollToTop();
    }
  }

  goNext(): void {
    if (this.currentPage() < this.totalPages - 1) {
      this.currentPage.update(p => p + 1);
      this.scrollToTop();
    }
  }

  goLast(): void {
    this.currentPage.set(this.totalPages - 1);
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  private onKeydown(e: KeyboardEvent): void {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        this.goNext();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        this.goPrev();
        break;
      case 'Home':
        this.goFirst();
        break;
      case 'End':
        this.goLast();
        break;
    }
  }

}
