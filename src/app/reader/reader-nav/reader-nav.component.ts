import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reader-nav',
  templateUrl: './reader-nav.component.html',
  styleUrls: ['./reader-nav.component.css'],
  standalone: true,
})
export class ReaderNavComponent {

  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;

  @Output() goFirst = new EventEmitter<void>();
  @Output() goPrev = new EventEmitter<void>();
  @Output() goNext = new EventEmitter<void>();
  @Output() goLast = new EventEmitter<void>();

}
