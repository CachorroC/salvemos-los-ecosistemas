export type Article = {
  id: number;
  title: string;
  author: string;
  date: Date;
  description: string;
  content: string;
  url: string | null;
  urlToImage: string;
  source: { name: string; } |null;
};

export interface ArticleWithId extends Article {
  _id: string;
}