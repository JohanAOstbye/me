import React from 'react';
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from './HeroElements';
import video from '../../videos/hero.mp4';

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Anna-Lea Jørgensen Vittersø</HeroH1>
        <HeroP>Im student at NTNU, studying social and sports science</HeroP>
        <HeroP>Scroll down to learn more about me!</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
