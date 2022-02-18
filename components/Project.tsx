import React from 'react';
import Image from 'next/image';
import { ButtonLink } from './elements/Button';

const Project = ({
  title,
  image,
  className,
  link,
  ...props
}: {
  image: string;
  link: { text: string; href: string };
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <article
      className={`${className} flex flex-col justify-between w-5/6 lg:w-5/12 snap-center shrink-0 rounded-2xl p-5 shadow-xl m-[calc(100%/12)] lg:m-[calc(100%/24)]`}
    >
      <h1 className='text-xl font-bold p-5'>{title}</h1>
      <div className='relative w-full flex-grow'>
        <Image
          src={image}
          alt='picture of me'
          objectFit='contain'
          layout='fill'
          quality={100}
        ></Image>
      </div>
      <div className='p-5'>
        <ButtonLink link={link.href}>{link.text}</ButtonLink>
        <p className=' border-t-2 mt-5 pt-2'>{props.children}</p>
      </div>
    </article>
  );
};

export default Project;
