import type { NextPage } from 'next';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero id='Home' />
      <Experience id='experience' />
      <Projects id='projects' />
    </Layout>
  );
};

export default Home;
