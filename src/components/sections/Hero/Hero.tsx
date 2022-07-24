import Scene from 'components/3d/Scene/Scene';
import React from 'react';
import s from './Hero.module.scss';

const hero = () => {
  return (
    <div className={s.hero}>
      <h1 className={s.heading}>Johan August Østbye</h1>
      <Scene />
    </div>
  );
};

export default hero;
