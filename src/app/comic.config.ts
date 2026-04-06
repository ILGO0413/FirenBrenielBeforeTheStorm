export interface ChapterConfig {
  title: string;
  pages: number;
}

export const COMIC_CONFIG = {
  chapters: [
    { title: 'ГЛАВА 1: Заражение', pages: 5 },
    { title: 'ГЛАВА 2: Дом', pages: 0 },
    { title: 'ГЛАВА 3: Корни', pages: 0 },
  ] as ChapterConfig[],
};
