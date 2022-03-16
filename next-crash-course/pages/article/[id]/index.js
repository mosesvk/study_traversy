import Link from 'next/link';
import { useRouter } from 'next/router';

const article = ({ article }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>{article.body}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => (
    {
      params: {
        id: id.toString()
      }
    }
  ));

  return {
    paths,
    fallback: false
    // this will return 404 if there is no data
  };
};

export default article;
