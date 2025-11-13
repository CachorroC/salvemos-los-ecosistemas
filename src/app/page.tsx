import NewsList from '#@/components/NewsList';

const API_KEY = process.env.NEWSAPI_KEY;
export default async function Home() {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );

  if (data.status !== 200) {
    return null;
  }
  const posts = await data.json();

  const { articles } = posts;
  return (
    <div>
      <h2>Top Headlines</h2>
      <NewsList articles={articles} />
    </div>
  );
}
