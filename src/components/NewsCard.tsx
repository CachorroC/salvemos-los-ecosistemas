import { Article } from '#@/types/article';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsCard({ article }: { article: Article }) {
  const { title, description, url, urlToImage, source } = article;

  return (
    <div className="news-card">
      <img
        src={urlToImage || 'https://via.placeholder.com/150'}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{source?.name}</small>
      <Link
        href={url as Route}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </Link>
    </div>
  );
}
