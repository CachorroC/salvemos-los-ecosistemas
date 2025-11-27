import styles from '#@/styles/postcard.module.css';
import Link from 'next/link';
import { Route } from 'next';

export default function PostCard(
  {
    title, description, id
  }: { title: string; description: string;  id: number | string}
) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/articulos/${ id }` as Route}>Read More</Link>
    </article>
  );
}
