import React, { Suspense } from "react";
import SphereC from "./SphereC";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ThreeCanvas() {
  return (
    <div>
      <Canvas className="canvas z-50" style={{ height: "40rem", width: "50rem"}}>
        <OrbitControls enableZoom={false}></OrbitControls>
        <ambientLight intensity={0.5}></ambientLight>
        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        ></directionalLight>
        <Suspense fallback={null}></Suspense>
        <SphereC></SphereC>
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;
