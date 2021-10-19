import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout.js';
import twitter from '../public/twitter.png';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={twitter}
        width={500}
        height={500}
        alt="preview"
        placeholder="blur"
      />
    </Layout>
  </>
);

export default MyApp;
