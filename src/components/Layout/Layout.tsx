import React from 'react';
import s from './Layout.module.scss';

type LayoutProps = {} & React.ComponentProps<'div'>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

export default Layout;
