import { shaderMaterial, useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import glsl from 'babel-plugin-glsl/macro';
import { useRef } from 'react';
import * as THREE from 'three';
import bubbles from 'assets/bubbles.jpg';
import spaceman from 'assets/spaceman.jpg';

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },

  // Vertexshader
  glsl`
    precision mediump float;
  
      varying vec2 vUv;
      varying float vWave;
      uniform float uTime;
  
      #pragma glslify: snoise3 = require('glsl-noise/simplex/3d');
  
      void main() {
        vUv = uv;
  
        vec3 pos = position;
        float noiseFreq = 2.5;
        float noiseAmp = 0.25;
  
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
  // Fragmentshader
  glsl`
  precision mediump float;
  
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    
    varying vec2 vUv;
    varying float vWave;
  
      void main() {
        float wave = vWave * 0.2;
        vec3 texture = texture2D(uTexture, vUv + vWave).rgb;
        gl_FragColor = vec4(texture, 1.0); //sin(vUv.x+uTime)*0.5 + uColor
      }
    `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef<any>();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uTime = clock.getElapsedTime();
    }
  });

  const imageTexture = useTexture(spaceman.src);
  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial uColor={'teal'} ref={ref} uTexture={imageTexture} />
    </mesh>
  );
};

export default Wave;
