import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成。ビルド時に静的サイトとして生成されています。
        </p>
        <p>{message}</p>
        <p>
          <Link href="/ssr" legacyBehavior>
            <a>Server Side Rendering</a>
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

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にgetStaticPropsが実行されました`;
  return { props: { message } };
};

export default SSG;
