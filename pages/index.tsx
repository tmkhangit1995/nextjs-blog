import { GetStaticProps } from 'next';
import Head from 'next/head';
import PostList from '../components/PostList';
import styles from '../styles/Home.module.css';
import { getSortedPosts, Post } from './api/blog';

export const getStaticProps: GetStaticProps = () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
};

type Props = {
  posts: Post[];
};

export default function Home(props: Props) {
  const { posts } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Blogs</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {posts.length === 0 ? (
          <div>Post list is empty !!!</div>
        ) : (
          <PostList posts={posts} />
        )}
      </main>
    </div>
  );
}
