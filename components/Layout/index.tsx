import { ReactNode } from 'react';
import Head from './Head';
import Nav from './Nav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=' bg-stone-300 text-gray-900 min-h-screen'>
      <Head />
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
