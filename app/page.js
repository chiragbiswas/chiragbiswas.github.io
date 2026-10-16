import { connection } from 'next/server';
import Header from '../components/Header';

export default async function BlogPage() {
  await connection();
  return (
    <>
      <Header page="blog" />
      <main id="main" tabIndex={-1}>
        <h1>Multiphonics</h1>
      </main>
    </>
  );
}
