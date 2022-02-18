import Image from 'next/image';
import front from '../public/bike.png';
import { IoIosArrowDropdown } from 'react-icons/io';
import Link from 'next/link';

const Hero = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className='w-full flex flex-col items-end h-[calc(100vh-4rem)] lx:w-[1152px] m-auto'
    >
      <div className='w-2/3 md:w-1/2 h-full flex flex-col items-center justify-around'>
        <div className='w-full flex flex-col pr-5 pl-12 mt-40'>
          <h1 className='text-lg font-bold -mb-2 '>Johan August Østbye</h1>
          <p className=' text-4xl font-black w-full'>
            Coding whatever, just for fun
          </p>
        </div>
        <div className='w-full justify-center mb-44'>
          <Link href='#projects'>
            <a className='flex flex-col items-center mx-10'>
              <h2 className='text-2xl font-medium '>See more</h2>
              <IoIosArrowDropdown className='w-10 h-10' />
            </a>
          </Link>
        </div>
      </div>
      <div className='absolute inset-0 self-end h-screen -z-10'>
        <Image
          src={front}
          alt='picture of me'
          objectFit='cover'
          layout='fill'
          quality={100}
          objectPosition={'45% 15%'}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
