import { articleCollection } from '#@/lib/connection/collections';
import { Article } from '#@/types/article';
import styles from '#@/styles/home.module.css';
import PostCard from '#@/components/PostCard';
import { left } from '#@/styles/layout.module.css';

const getCommentsCollection = async () => {
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
};

export default async function Page() {
  const articles = await getCommentsCollection();

  const {
    length
  } = articles;

  const posts = [
    ...articles,
    {
      id   : 'vicacha',
      title: 'Vicachá: la luz de las cuencas hídricas',
      description:
        'Bogotá nació abrazada por el agua. Sus primeros habitantes, los pueblos muiscas, comprendían la ciudad como un valle sagrado tejido por ríos y humedales donde cada corriente tenía un carácter, un espíritu y un propósito. Entre ellas destacaba elrío Vicachá, “resplandor de luna”, que descendía desde los cerros orientales como un hilo de plata, purificando el territorio antes de unirse al río Fucha',
    },
    {
      id         : length + 2,
      title      : 'Why Concrete Hurts Rivers',
      description: 'Environmental breakdown...',
    },
    {
      id         : length + 3,
      title      : 'Climate Change is Now',
      description: 'Data, trends, solutions...',
    },
    {
      id         : length + 4,
      title      : 'Wild Plants of Bogotá',
      description: 'Native biodiversity matters...',
    },
  ];

  return (
    <div className={left}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h2>Welcome to the Blog</h2>
          <p>Stories, science and ideas worth sharing.</p>
        </section>

        <main className={styles.layout}>
          {/* Posts grid */}
          <section className={styles.posts}>
            {posts.map(
              (
                post
              ) => {
                return (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    id={post.id}
                  />
                );
              }
            )}
          </section>

          {/* Sidebar
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside> */}
        </main>
        <footer className={styles.footer}>© 2025 Salvemos los ecosistemas</footer>
      </div>
    </div>
  );
}
