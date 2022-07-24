import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Wave from '../Wave';
import s from './Scene.module.scss';

const Scene = () => {
  return (
    <div className={s.container}>
      <Canvas camera={{ fov: 10 }}>
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
