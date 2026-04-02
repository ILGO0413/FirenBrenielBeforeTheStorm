// reader.component.ts

import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { PAGES, ComicPage } from './pages.data';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css'],
  standalone: true,
})
export class ReaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('pageSvg') pageSvgRef!: ElementRef<SVGElement>;
  @ViewChild('readerScroll') readerScrollRef!: ElementRef<HTMLDivElement>;

  currentPage: number = 0;
  totalPages: number = PAGES.length;

  private keyboardSub!: Subscription;

  ngOnInit(): void {
    this.keyboardSub = fromEvent<KeyboardEvent>(document, 'keydown')
      .subscribe(e => this.onKeydown(e));
  }

  ngAfterViewInit(): void {
    this.renderPage();
  }

  ngOnDestroy(): void {
    this.keyboardSub?.unsubscribe();
  }

  goFirst(): void {
    this.currentPage = 0;
    this.renderPage();
  }

  goPrev(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.renderPage();
    }
  }

  goNext(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.renderPage();
    }
  }

  goLast(): void {
    this.currentPage = this.totalPages - 1;
    this.renderPage();
  }

  private renderPage(): void {
    const svg = this.pageSvgRef.nativeElement;
    const page: ComicPage = PAGES[this.currentPage];
    page.render(svg);
    this.scrollToTop();
  }

  private scrollToTop(): void {
    const scroll = this.readerScrollRef.nativeElement;
    scroll.scrollTop = 0;
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
