"use client";
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const DiscCover = () => {
  const texture = useLoader(TextureLoader, "assets/graphics/Graphics2.png");
  texture.anisotropy = 16;
  texture.minFilter = THREE.LinearFilter; // atau LinearMipMapLinearFilter
  texture.magFilter = THREE.LinearFilter;
  return (
    <mesh position={[-0.77, 0, 0.3]} scale={[0.68, 0.64, 1]}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default DiscCover;
