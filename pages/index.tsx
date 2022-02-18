import type { NextPage } from 'next';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Project from '../components/Project';

import { online, taco } from '../projects';
import Contactform from '../components/Contactform';

const projects = [
  {
    image: taco,
    title: 'Tacomanager',
    link: { href: 'http://taco.ostbye.dev', text: 'taco.ostbye' },
    description:
      'Tacomanager er en nettside lagd for kolletivet for å holde styr på hvem som skal være med på tacofredag:)',
  },
  {
    image: online,
    title: 'Fakturainfo',
    link: {
      href: 'http://faktura.online.ntnu.no',
      text: 'faktura.online.ntnu',
    },
    description:
      'En nettside for Online linjeforening som blir brukt til samle inn fakturainformasjon fra bedrifter',
  },
  {
    image: online,
    title: 'Fakturainfo',
    link: {
      href: 'http://faktura.online.ntnu.no',
      text: 'faktura.online.ntnu',
    },
    description:
      'En nettside for Online linjeforening som blir brukt til samle inn fakturainformasjon fra bedrifter',
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero id='Home' />
      <Section id='projects' title='Projects'>
        <div className='w-full h-[calc(100%-80px)] flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-mx-10'>
          {projects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              link={project.link}
            >
              {project.description}
            </Project>
          ))}
        </div>
      </Section>
      <Section id='education' title='NTNU' subtitle='Education'>
        {' '}
        hva er skole lol
      </Section>
      <Section
        id='contact'
        title='Lets get in touch!'
        subtitle='Contact me'
        className='h-[84.99vh]'
      >
        <Contactform />
      </Section>
    </Layout>
  );
};

export default Home;
