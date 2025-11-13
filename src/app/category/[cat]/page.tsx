import NewsList from '#@/components/NewsList';

const API_KEY = process.env.NEWSAPI_KEY;
export default async function Page({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;

  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${API_KEY}`
  );
  const posts = await data.json();
  const { articles } = posts;
  return (
    <div>
      <h2>{cat.toUpperCase()} News</h2>
      <NewsList articles={articles} />
    </div>
  );
}
