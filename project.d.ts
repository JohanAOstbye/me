declare module 'babel-plugin-glsl/macro' {
  function glsl(strings: TemplateStringsArray, ...expr: string[]): string;
  export = glsl;
}

declare namespace JSX {
  interface IntrinsicElements {
    waveShaderMaterial: ReactThreeFiber.Object3DNode<
      WaveShaderMaterial,
      typeof WaveShaderMaterial
    >;
  }
}
