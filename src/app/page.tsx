import NewsList from '#@/components/NewsList';
import { articleCollection } from '#@/lib/connection/collections';
import { Article } from '#@/types/article';

const API_KEY = process.env.NEWSAPI_KEY;

const getCommentsCollection = async () => {
  const arrayList: Article[] = [];

  const collection = await articleCollection();

  const listCollection = collection.find();

  for await (const element of listCollection) {
    const stringified = JSON.stringify(element);

    const parsed = JSON.parse(stringified);

    arrayList.push(parsed);
  }

  return arrayList;
};

export default async function Page() {
  const articles = await getCommentsCollection();

  return (
    <div>
      <h2>Top Headlines</h2>
      <NewsList articles={articles} />
    </div>
  );
}
