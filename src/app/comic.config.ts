export interface ChapterConfig {
  title: string;
  pages: number;
}

export const COMIC_CONFIG = {
  chapters: [
    { title: 'ГЛАВА 1: Заражение', pages: 21 },
    { title: 'ГЛАВА 2', pages: 0 },
    { title: 'ГЛАВА 3', pages: 0 },
  ] as ChapterConfig[],
};
