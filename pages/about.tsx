import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import me from '../public/me.webp';

const about = () => {
  return (
    <Layout>
      <section className='w-full flex justify-between h-[calc(100vh-4rem)] lx:w-[1152px] m-auto p-6'>
        <div>
          <h1>Johan August Østbye</h1>
        </div>
        <div className='relative w-64 h-64 rounded-full overflow-hidden '>
          <Image
            src={me}
            alt='picture of me'
            objectFit='cover'
            layout='fill'
            quality={100}
            objectPosition={'60% 60%'}
          ></Image>
        </div>
      </section>
    </Layout>
  );
};

export default about;
