import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type SSGProps = {
  message: string;
};

const SSR: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Server Side Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはServer Side Rendering。
          アクセス時にサーバーで描画されたページです。
        </p>
        <p>{message}</p>
        <p>
          <Link href="/ssg" legacyBehavior>
            <a>Static Site Generation</a>
          </Link>
        </p>
        <p>
          <Link href="/isr" legacyBehavior>
            <a>Incremental Static Regeneration</a>
          </Link>
        </p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSGProps> = async () => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にgetServerSidePropsが実行されました`;
  return { props: { message } };
};

export default SSR;
