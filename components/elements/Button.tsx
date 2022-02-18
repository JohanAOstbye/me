import React from 'react';
import Link from 'next/link';

type linkprops = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  link: string;
  primary?: boolean;
  error?: boolean;
};

type btnprops = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
  error?: boolean;
};

export const ButtonLink = ({
  link = '/test',
  children = 'test',
  className,
  ...props
}: linkprops) => {
  return (
    <Link href={link}>
      <a
        className={`${className} border-stone-500 hover:border-stone-800 hover:bg-stone-300 border-2 rounded-lg py-2 px-4 font-bold`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export const Button = ({
  children = 'test',
  className,
  ...props
}: btnprops) => {
  return (
    <button
      {...props}
      className={`${className} border-stone-500 hover:border-stone-800 hover:bg-stone-300 border-2 rounded-lg py-2 px-4 font-bold`}
    >
      {children}
    </button>
  );
};
