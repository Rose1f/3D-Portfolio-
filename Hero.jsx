import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Hero() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial color="#00BFFF" wireframe />
    </mesh>
  );
}