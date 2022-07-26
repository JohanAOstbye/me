import Layout from 'components/Layout/Layout';
import Hero from 'components/sections/Hero/Hero';
import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  // const { data, isLoading } = trpc.useQuery([
  //   "example.hello",
  //   { text: "from tRPC" },
  // ]);

  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
