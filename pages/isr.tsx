import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISR。60秒ごとに再生成されるページです。</p>
        <p>{message}</p>
        <p>
          <Link href="/ssr" legacyBehavior>
            <a>Server Side Rendering</a>
          </Link>
        </p>
        <p>
          <Link href="/ssg" legacyBehavior>
            <a>Static Site Generation</a>
          </Link>
        </p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async () => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にgetStaticPropsが実行されました`;
  console.log(message);

  return { props: { message }, revalidate: 60 };
};

export default ISR;
