import { Sphere } from '@react-three/drei';
import { Canvas as Fake } from '@react-three/fiber';
import React from 'react';
import './_canvas.module.scss';

type props = {
  children?: React.ReactNode;
} & Pick<React.ComponentProps<typeof Fake>, 'shadows' | 'camera' | 'className'>;

function Canvas({
  children,
  shadows = true,
  className,
  camera = {
    position: [-6, 7, 7],
  },
}: props) {
  return (
    <div>hei</div>
    // <Fake
    //   className={className + ' canvas'}
    //   {...{
    //     shadows,
    //     camera,
    //   }}
    // >
    //   <Sphere></Sphere>
    // </Fake>
  );
}

export default Canvas;
