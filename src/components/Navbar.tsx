import Link from 'next/link';

const categories = [
  'business',
  'entertainment',
  'sports',
  'technology',
  'science',
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>🗞️ React News</h1>
      <div className="nav-links">
        <Link href="/">Home</Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat}`}
          >
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
}
