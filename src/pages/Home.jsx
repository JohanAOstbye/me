import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
    </>
  );
};

export default Home;
