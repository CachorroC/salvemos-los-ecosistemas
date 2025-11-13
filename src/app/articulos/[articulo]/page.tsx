import NewsCard from '#@/components/NewsCard';
import { articleCollection } from '#@/lib/connection/collections';
import { notFound } from 'next/navigation';

async function getArticuloById (
  articuloId: number
) {

  const collection = await articleCollection();

  const listCollection = collection.findOne(
    {
      id: articuloId
    }
  );

  return listCollection;
}

export default async function Page (
  {
    params,
  }: {
    params: Promise<{ articulo: string }>;
  }
) {
  const {
    articulo
  } = await params;

  const currentArticulo = await getArticuloById(
    Number(
      articulo
    )
  );

  if ( !currentArticulo ) {
    return notFound();
  }

  return (
    <div>
      <h2>{currentArticulo.title}</h2>
      <NewsCard article={
        currentArticulo
      }
      />
    </div>
  );
}
