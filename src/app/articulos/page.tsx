
import NewsList from '#@/components/NewsList';
import { articleCollection } from '#@/lib/connection/collections';
import { Article } from '#@/types/article';

async function getArticles () {

  const arrayList: Article[] = [];

  const collection = await articleCollection();

  const listCollection = collection.find();

  for await ( const element of listCollection ) {
    const stringified = JSON.stringify(
      element
    );

    const parsed = JSON.parse(
      stringified
    );

    arrayList.push(
      parsed
    );
  }

  return arrayList;
}

export default async  function Page () {

  const articles = await getArticles();

  return (
    <NewsList articles={ articles} />
  );
}