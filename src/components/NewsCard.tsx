import {  containerEnabled } from '#@/styles/elevated-card.module.css';
import { bodyMedium, labelMedium, titleMedium } from '#@/styles/typography.module.css';
import { Article } from '#@/types/article';
import { Route } from 'next';
import Link from 'next/link';

export default function NewsCard(
  {
    article
  }: { article: Article }
) {
  const {
    title, description, urlToImage, source, content, id
  } = article;

  return (
    <div className={containerEnabled}>
      <img
        src={urlToImage || 'https://via.placeholder.com/150'}
        alt={title}
      />
      <h3 className={titleMedium}>{title}</h3>
      <p className={labelMedium}>{ description }</p>
      <sub className={bodyMedium}>{content}</sub>
      <small>{ source?.name }</small>
      <Link href={`/articulos/${ id }` as Route}>Read more</Link>

    </div>
  );
}
