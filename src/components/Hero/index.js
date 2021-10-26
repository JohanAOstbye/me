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
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Johan August Østbye</HeroH1>
        <HeroP>
          Im a student at NTNU, Norway, studying databases and search,
          informatics.
        </HeroP>
        <HeroP>Scroll down to learn more about me!</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
