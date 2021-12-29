import Image from 'next/image';
import front from '../public/front.jpg';
import { IoIosArrowDropdown } from 'react-icons/io';
import Link from 'next/link';

const Hero = ({ id }: { id: string }) => {
  return (
    <div id={id} className='w-full flex flex-col mt-8'>
      <div className='w-full lx:w-[1152px] flex flex-col mx-auto px-5'>
        <h1 className='text-lg font-bold -mb-2 '>Johan August Østbye</h1>
        <p className=' text-4xl font-black min-w-full'>
          Developing fun and exiting websites
        </p>
      </div>
      <div className='relative w-4/5 self-end h-[45vh] mt-16'>
        <Image
          src={front}
          alt='picture of me'
          objectFit='cover'
          layout='fill'
          quality={100}
          objectPosition={'20% 20%'}
        ></Image>
      </div>
      <div className='w-full'>
        <Link href='#experience'>
          <a className='flex flex-col items-center py-10'>
            <h2 className='text-2xl font-medium '>See more</h2>
            <IoIosArrowDropdown className='w-10 h-10' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
