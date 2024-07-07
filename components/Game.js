import Head from 'next/head';
import Layout from '../components/layout';
import dynamic from 'next/dynamic';

// Dynamically import the Tetris component to ensure it only renders on the client-side
const Tetris = dynamic(() => import('../components/Tetris/App'), { ssr: false });

export default function GamePage() {
  return (
    <Layout>
      <Head>
        <title>Game</title>
      </Head>
      <section>
        <h1>Game Page</h1>
        <p>Welcome to the game page. Enjoy playing Tetris!</p>
      </section>
      <section>
        <Tetris />
      </section>
    </Layout>
  );
}
