import Link from 'next/link';

export default function Header({ page }) {
  return (
    <header>
      <Link className="wordmark" href="/">Multiphonics</Link>
      <nav aria-label="Main navigation">
        <Link href="/" aria-current={page === 'blog' ? 'page' : undefined}>Writing</Link>
        <Link href="/about" aria-current={page === 'about' ? 'page' : undefined}>About</Link>
      </nav>
    </header>
  );
}
