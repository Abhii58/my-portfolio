import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDObject from './ThreeDObject';
import Lighting from './helpers/Lighting';
import Loader from './helpers/Loader';

const ThreeDScene = () => {
  return (
    <Canvas className="canvas">
      <Suspense fallback={<Loader />}>
        <Lighting />
        <ThreeDObject />
        <OrbitControls enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}

export default ThreeDScene;
