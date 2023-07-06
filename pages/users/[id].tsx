import { log } from 'console';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

type UserProps = {
  id: string;
};

const User: NextPage<UserProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成。ビルド時に静的サイトとして生成されています。
        </p>
        <p>あなたのIDは {id} です。</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: 'kinaly' } }, { params: { id: 'fat' } }];
  return { paths, fallback: true };
};

interface UserParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<UserProps, UserParams> = async (
  context
) => {
  const id = context.params!['id'];
  return { props: { id } };
};

export default User;
