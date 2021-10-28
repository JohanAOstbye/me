import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Article from '../components/Info';
import { education, me } from '../components/Info/pages';
import Talk from '../components/Talk';
import Cards from '../components/Cards';
import { projectcards } from '../components/Cards/cards';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero id='home' />
      <Article {...me} />
      <Article {...education} />
      <Cards {...projectcards} />
      <Talk id='letstalk' darkTheme={false} />
    </>
  );
};

export default Home;
