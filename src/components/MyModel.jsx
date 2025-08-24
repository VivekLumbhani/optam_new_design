"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const gltf = useGLTF("/models/mymodel.glb"); // relative to /public

  return <primitive object={gltf.scene} scale={1} />;
}

export default function My3DModel() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>
    </div>
  );
}
