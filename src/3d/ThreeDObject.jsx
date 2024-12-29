import React from 'react';
import { useGLTF } from '@react-three/drei';

const ThreeDObject = () => {
  const { scene } = useGLTF('/assets/models/scene.gltf'); // Make sure to use the correct path

  return <primitive object={scene} scale={0.5} />;
}

export default ThreeDObject;
