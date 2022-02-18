import React from 'react';
import Image from 'next/image';
import { MdLocationPin, MdSchool } from 'react-icons/md';
import Layout from '../components/Layout';
import me from '../public/me2.webp';
import IconLine from '../components/IconLine';
import { ButtonLink } from '../components/elements/Button';
import Link from 'next/link';
import IconLinks from '../components/elements/IconLinks';

const about = () => {
  return (
    <Layout>
      <section className='w-full flex flex-col md:flex-row-reverse justify-between min-h-[calc(85vh-4rem)] lx:w-[1152px] m-auto p-6'>
        <div className='flex-shrink-0 flex-grow'>
          <div className='relative w-64 h-64 rounded-full overflow-hidden mt-10 md:mx-auto'>
            <Image
              src={me}
              alt='picture of me'
              objectFit='cover'
              layout='fill'
              quality={100}
              objectPosition={'60% 60%'}
            ></Image>
          </div>
        </div>
        <div>
          <div>
            <h1 className='text-4xl font-black mt-10'>Johan August Østbye</h1>
            <p>
              <IconLine Icon={MdLocationPin}>Nesodden/Trondheim</IconLine>
              <IconLine Icon={MdSchool}>
                NTNU - Master of Science in Informatics
              </IconLine>
              {/* <IconLine Icon={MdLocationPin}>Nesodden/Trondheim</IconLine> */}
            </p>
          </div>
          <IconLinks className='flex mt-5' />
          <p className='my-5 max-w-xl'>
            Jeg er en 23 år gammel student fra Nesodden. Jeg går nå 4. året på
            NTNU master i Informatikk med retning databaser og søk. Jeg er en
            veldig sosial person og liker godt å samarbeide på prosjekter.
          </p>
          <div className='my-10'>
            <ButtonLink link={'https://cv.ostbye.dev'}>My CV</ButtonLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
