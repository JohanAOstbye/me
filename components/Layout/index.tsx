import React from 'react';
import Footer from './Footer';
import Head from './Head';
import Nav from './Nav';

const Layout = ({
  id,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${className} text-gray-900 -z-50 h-screen`} {...props}>
      <Head />
      <Nav />
      <main className=''>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
