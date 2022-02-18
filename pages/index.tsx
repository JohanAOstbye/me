import type { NextPage } from 'next';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Project from '../components/Project';

import { cv, online, taco } from '../projects';
import Contactform from '../components/Contactform';
import { ButtonLink } from '../components/elements/Button';

const projects = [
  {
    image: taco,
    title: 'Tacomanager',
    link: { href: 'http://taco.ostbye.dev', text: 'taco.ostbye' },
    description:
      'Tacomanager is a website just for organizing tacofriday with my friends:) Its built with Nextjs, Tailwindcss and mongodb',
  },
  {
    image: online,
    title: 'Invoiceinfo',
    link: {
      href: 'http://faktura.online.ntnu.no',
      text: 'faktura.online.ntnu',
    },
    description:
      'A webpage for collecting invoice information from companies that Online works with. Built with Gastby and Chakra UI, hosted on AWS',
  },
  {
    image: cv,
    title: 'My cv',
    link: {
      href: 'http://cv.ostbye.dev',
      text: 'cv.ostbye',
    },
    description: 'My cv as webpage. Built with Gatsby and tailwind',
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero id='Home' />
      <div className='bg-gradient-to-t from-black h-20 -mt-20 lg:h-10 lg:-mt-10 xxl:hidden'></div>
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
      {/* <Section id='education' title='NTNU' subtitle='Education'>
        {' '}
        hva er skole lol
      </Section> */}
      <Section
        id='contact'
        title='Lets get in touch!'
        subtitle='Contact me'
        className='h-[84.99vh] flex flex-col'
      >
        <Contactform />
        <div className='mt-10 flex w-full justify-center items-center'>
          <span className='mr-5 text-lg'>Or find my cv here:</span>
          <ButtonLink link={'https://cv.ostbye.dev'}>My CV</ButtonLink>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
