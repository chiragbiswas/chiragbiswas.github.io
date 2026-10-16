import { connection } from 'next/server';
import Header from '../../components/Header';

export const metadata = { title: 'About' };

export default async function AboutPage() {
  await connection();
  return (
    <>
      <Header page="about" />
      <main id="main" tabIndex={-1}>
        <h1>About</h1>
      </main>
    </>
  );
}
