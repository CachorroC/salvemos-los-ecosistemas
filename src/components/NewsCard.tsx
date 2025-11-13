import { bodyMedium } from '#@/styles/typography.module.css';
import { Article } from '#@/types/article';

export default function NewsCard(
  {
    article
  }: { article: Article }
) {
  const {
    title, description, urlToImage, source, content
  } = article;

  return (
    <div>
      <img
        src={urlToImage || 'https://via.placeholder.com/150'}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{ description }</p>
      <sub className={bodyMedium}>{content}</sub>
      <small>{source?.name}</small>

    </div>
  );
}
