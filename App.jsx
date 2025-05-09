import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <Hero />
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="text-white text-center mt-20 pointer-events-auto">
          <h1 className="text-5xl font-bold">Sohail Hazary Sium</h1>
          <p className="text-xl mt-2">Full Stack & 3D Web Developer</p>
        </div>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}