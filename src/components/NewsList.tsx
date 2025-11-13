import { Article } from '#@/types/article';
import NewsCard from './NewsCard';

export default function NewsList({ articles }: { articles: Article[] }) {
  return (
    <div className="news-grid">
      {articles.map((a, index) => {
        return (
          <NewsCard
            key={index}
            article={a}
          />
        );
      })}
    </div>
  );
}
