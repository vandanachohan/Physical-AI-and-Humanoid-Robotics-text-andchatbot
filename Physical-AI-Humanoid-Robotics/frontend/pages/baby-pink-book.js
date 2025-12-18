/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import BabyPinkLayout from '../components/BabyPinkLayout';
import BabyPinkHeroSection from '../components/BabyPinkHeroSection';
import BabyPinkBooksSection from '../components/BabyPinkBooksSection';
import BabyPinkAboutSection from '../components/BabyPinkAboutSection';

export default function BabyPinkBookPage() {
  return (
    <>
      <Head>
        <title>Beautiful Baby Pink Book Website</title>
        <meta name="description" content="A pretty baby pink themed website for books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BabyPinkLayout>
        <BabyPinkHeroSection />
        <BabyPinkBooksSection />
        <BabyPinkAboutSection />
      </BabyPinkLayout>
    </>
  );
}