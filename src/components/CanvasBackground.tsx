'use client';

import { useFrame, Canvas } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 150;
const MAX_DISTANCE = 2;

function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Initialize particles with random positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15;
      vel[i] = (Math.random() - 0.5) * 0.02;
    }
    return [pos, vel];
  }, []);

  // Pre-allocate arrays for lines
  const linePositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3),
    []
  );

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const posArray = positionsAttr.array as Float32Array;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];

      // Bounce off walls
      if (Math.abs(posArray[i3]) > 7.5) velocities[i3] *= -1;
      if (Math.abs(posArray[i3 + 1]) > 7.5) velocities[i3 + 1] *= -1;
      if (Math.abs(posArray[i3 + 2]) > 7.5) velocities[i3 + 2] *= -1;
    }
    positionsAttr.needsUpdate = true;

    // Update lines
    let lineIndex = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = posArray[i3] - posArray[j3];
        const dy = posArray[i3 + 1] - posArray[j3 + 1];
        const dz = posArray[i3 + 2] - posArray[j3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < MAX_DISTANCE * MAX_DISTANCE) {
          linePositions[lineIndex++] = posArray[i3];
          linePositions[lineIndex++] = posArray[i3 + 1];
          linePositions[lineIndex++] = posArray[i3 + 2];
          linePositions[lineIndex++] = posArray[j3];
          linePositions[lineIndex++] = posArray[j3 + 1];
          linePositions[lineIndex++] = posArray[j3 + 2];
        }
      }
    }

    const lineGeo = linesRef.current.geometry;
    lineGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions.subarray(0, lineIndex), 3)
    );
    lineGeo.attributes.position.needsUpdate = true;
    
    // Rotate slightly
    pointsRef.current.rotation.y += 0.001;
    linesRef.current.rotation.y += 0.001;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={PARTICLE_COUNT}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#00f2fe" transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#7f5af0" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-background">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
