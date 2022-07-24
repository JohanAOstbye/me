declare module 'babel-plugin-glsl/macro' {
  function glsl(strings: TemplateStringsArray, ...expr: string[]): string;
  export = glsl;
}

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
      uniform float uTime;
  
      #pragma glslify: snoise3 = require('glsl-noise/simplex/3d');
  
      void main() {
        vUv = uv;
  
        vec3 pos = position;
        float noiseFreq = 1.5;
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
  
      void main() {
        vec3 texture = texture2D(uTexture, vUv).rgb;
        gl_FragColor = vec4(texture, 1.0); //sin(vUv.x+uTime)*0.5 + uColor
      }
    `
);

extend({ WaveShaderMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: ReactThreeFiber.Object3DNode<
        WaveShaderMaterial,
        typeof WaveShaderMaterial
      >;
    }
  }
}
