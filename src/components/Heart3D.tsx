import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Placeholder "Heart" Geometry (TorusKnot acts as a complex organic shape)
function HeartMesh(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  
  // Animate rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.y += delta * 0.5;
        // Heartbeat effect
        const scale = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.05;
        meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial
        color={hovered ? '#fb7185' : '#e11d48'} // Rose-400 to Rose-600
        roughness={0.3}
        metalness={0.8}
        emissive={'#9f1239'}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function Heart3D() {
  return (
    <div className="w-full h-full min-h-[500px] bg-slate-900/10 rounded-xl overflow-hidden relative">
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 35]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" /> {/* Clinical Blue Rim Light */}
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <HeartMesh position={[0, 0, 0]} />
            </Float>

            <OrbitControls enableZoom={true} enablePan={false} minDistance={20} maxDistance={50} />
            <Environment preset="city" />
        </Canvas>
        
        {/* Overlay Label */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md shadow-sm pointer-events-none">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Simulación Activa</span>
            <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-900">Corazón (Modelo Base)</span>
            </div>
        </div>
    </div>
  );
}
