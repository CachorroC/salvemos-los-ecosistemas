import NewsCard from './NewsCard';

export default function NewsList({ articles }) {
  return (
    <div className="news-grid">
      {articles.map((a, index) => (
        <NewsCard
          key={index}
          article={a}
        />
      ))}
    </div>
  );
}
