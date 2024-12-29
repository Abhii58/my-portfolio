import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loader">
        <p>Loading... {progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
}

export default Loader;
