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

  private preloadCache = new Set<string>();

  private preloadAdjacent(): void {
    const p = this.currentPage();
    this.preload(p - 1);
    this.preload(p + 1);
  }

  private preload(index: number): void {
    if (index < 0 || index >= this.totalPages) return;
    const url = this.pages[index];
    if (this.preloadCache.has(url)) return;
    this.preloadCache.add(url);
    const img = new Image();
    img.src = url;
  }

  private keyboardSub!: Subscription;

  ngOnInit(): void {
    this.keyboardSub = fromEvent<KeyboardEvent>(document, 'keydown')
      .subscribe(e => this.onKeydown(e));
    this.preloadAdjacent();
  }

  ngOnDestroy(): void {
    this.keyboardSub?.unsubscribe();
  }

  goFirst(): void {
    this.currentPage.set(0);
    this.scrollToTop();
    this.preloadAdjacent();
  }

  goPrev(): void {
    if (this.currentPage() > 0) {
      this.currentPage.update(p => p - 1);
      this.scrollToTop();
      this.preloadAdjacent();
    }
  }

  goNext(): void {
    if (this.currentPage() < this.totalPages - 1) {
      this.currentPage.update(p => p + 1);
      this.scrollToTop();
      this.preloadAdjacent();
    }
  }

  goLast(): void {
    this.currentPage.set(this.totalPages - 1);
    this.scrollToTop();
    this.preloadAdjacent();
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  onPageClick(e: MouseEvent): void {
    const x = e.offsetX;
    const width = (e.currentTarget as HTMLElement).offsetWidth;
    if (x < width / 3) {
      this.goPrev();
    } else if (x > (width / 3) * 2) {
      this.goNext();
    }
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
