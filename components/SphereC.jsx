import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere as Sphere, MeshDistortMaterial } from "@react-three/drei";

function SphereC() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.6}>
      <MeshDistortMaterial
        color="#0352ED"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={1}
      ></MeshDistortMaterial>
    </Sphere>
  );
}

export default SphereC;
