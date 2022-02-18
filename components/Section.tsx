import React from 'react';

const Section = ({
  id,
  className,
  title,
  subtitle,
  ...props
}: { subtitle?: string } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section id={id} className={`${className} h-screen py-5 pt-16`} {...props}>
      <div className='w-5/6 mx-auto'>
        {subtitle ? <h2 className='text-lg font-bold'>{subtitle}</h2> : ''}
        <h1 className='text-4xl font-black'>{title}</h1>
      </div>
      {props.children}
    </section>
  );
};

export default Section;
