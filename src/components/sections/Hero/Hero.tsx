import Scene from 'components/3d/Scene/Scene';
import React from 'react';
import s from './Hero.module.scss';

const hero = () => {
  return (
    <div className={s.hero}>
      <Scene />
    </div>
  );
};

export default hero;
