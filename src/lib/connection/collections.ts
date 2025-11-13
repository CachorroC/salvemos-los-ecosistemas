
import { Article } from '#@/types/article';
import clientPromise from './mongodb';

export async function articleCollection() {
  const client = await clientPromise;

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico'
    );
  }

  const db = client.db(
    'salvemos-los-ecosistemas'
  );

  const contacto = db.collection<Article>(
    'articulos'
  );

  return contacto;
}
