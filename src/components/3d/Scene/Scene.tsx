import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import s from './Scene.module.scss';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro'; // <--- Module to import

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
  },

  // Vertexshader
  glsl`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragmentshader
  glsl`
precision mediump float;

  uniform vec3 uColor;
  uniform float uTime;

  varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(sin(vUv.x+uTime)*0.5 + uColor, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial uColor={'teal'} ref={ref} />
    </mesh>
  );
};

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
