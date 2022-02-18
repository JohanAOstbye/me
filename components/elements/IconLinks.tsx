import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { ImLinkedin2, ImGithub } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';

const defaulticons = [
  {
    Icon: ImLinkedin2,
    link: 'https://www.linkedin.com/in/johan-august-%C3%B8stbye-6b0669192/',
  },
  { Icon: ImGithub, link: 'https://github.com/JohanAOstbye/' },
  { Icon: BsInstagram, link: 'https://www.instagram.com/johan_august98/' },
];

const IconLinks = ({
  icons = defaulticons,
  className,
  ...props
}: {
  icons?: { Icon: IconType; link: string }[];
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${className} `} {...props}>
      {icons.map(({ Icon, link }, index) => (
        <Link key={index} href={link}>
          <a className={index == 0 ? '' : 'ml-3'}>
            <Icon className='w-6 h-6' />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default IconLinks;
