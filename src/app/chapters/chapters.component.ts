import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { COMIC_CONFIG, ChapterConfig } from '../comic.config';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
  standalone: true,
})
export class ChaptersComponent {
  readonly chapters: ChapterConfig[] = COMIC_CONFIG.chapters;

  constructor(private router: Router) {}

  readChapter(index: number): void {
    this.router.navigate(['/reader'], { queryParams: { chapter: index } });
  }

  chapterCover(index: number): string {
    return this.chapters[index].pages > 0
      ? `pages/${index + 1}-1.png`
      : 'blank-cover.png';
  }
}
