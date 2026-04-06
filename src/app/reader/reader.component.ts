import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  computed,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  readonly chapters = COMIC_CONFIG.chapters;

  currentChapter = signal(0);
  currentPage = signal(0);

  totalPages = computed(() => this.chapters[this.currentChapter()].pages);
  currentPageUrl = computed(() =>
    `pages/${this.currentChapter() + 1}-${this.currentPage() + 1}.png`
  );

  private preloadCache = new Set<string>();
  private keyboardSub!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const chapterParam = this.route.snapshot.queryParamMap.get('chapter');
    const chapterIndex = chapterParam !== null ? parseInt(chapterParam, 10) : 0;
    this.currentChapter.set(
      chapterIndex >= 0 && chapterIndex < this.chapters.length ? chapterIndex : 0
    );
    this.currentPage.set(0);
    this.preloadAdjacent();

    this.keyboardSub = fromEvent<KeyboardEvent>(document, 'keydown')
      .subscribe(e => this.onKeydown(e));
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
    if (this.currentPage() < this.totalPages() - 1) {
      this.currentPage.update(p => p + 1);
      this.scrollToTop();
      this.preloadAdjacent();
    }
  }

  goLast(): void {
    this.currentPage.set(this.totalPages() - 1);
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

  private preloadAdjacent(): void {
    const p = this.currentPage();
    this.preload(p - 1);
    this.preload(p + 1);
  }

  private preload(pageIndex: number): void {
    if (pageIndex < 0 || pageIndex >= this.totalPages()) return;
    const url = `pages/${this.currentChapter() + 1}-${pageIndex + 1}.png`;
    if (this.preloadCache.has(url)) return;
    this.preloadCache.add(url);
    fetch(url).catch(() => {});
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
