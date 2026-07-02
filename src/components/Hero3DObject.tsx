'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AICore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.8;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={groupRef}>
        {/* Inner Glowing Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={1.5}
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Outer Data Shell */}
        <mesh ref={ringRef} scale={1.4}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#7f5af0"
            emissive="#7f5af0"
            emissiveIntensity={0.5}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Orbiting particles could go here, but this double-icosahedron gives a great AI Core vibe */}
      </group>
    </Float>
  );
}

export default function Hero3DObject() {
  return (
    <div className="w-48 h-48 sm:w-64 sm:h-64 relative cursor-pointer">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AICore />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
