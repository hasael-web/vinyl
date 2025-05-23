"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import * as THREE from "three";

const DiscAnimation = () => {
  const meshRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, "/assets/textures/disc.png");
  texture.anisotropy = 16;
  texture.minFilter = THREE.LinearFilter; // atau LinearMipMapLinearFilter
  texture.magFilter = THREE.LinearFilter;
  useFrame(() => {
    meshRef.current.rotation.z += 0.001;
  });

  return (
    <>
      <mesh
        ref={meshRef}
        position={[0.6, 0, 0.11]}
        scale={[0.65, 0.65, 0.1]}
        castShadow={false}
        receiveShadow={false}
      >
        <circleGeometry args={[1.93, 100]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      <mesh position={[0.6, 0, 0.16]} castShadow={false} receiveShadow={false}>
        <circleGeometry args={[0.02, 50]} />
        <meshBasicMaterial color={"#fff"} />
      </mesh>

      <mesh position={[0.6, 0, 0.15]} castShadow={false} receiveShadow={false}>
        <circleGeometry args={[0.3, 50]} />
        <meshBasicMaterial color={"#BF9742"} />
      </mesh>

      <mesh position={[0.6, 0, 0.14]} castShadow={false} receiveShadow={false}>
        <circleGeometry args={[0.35, 50]} />
        <meshBasicMaterial color={"#DA498D"} />
      </mesh>

      <mesh position={[0.6, 0, 0.13]} castShadow={false} receiveShadow={false}>
        <circleGeometry args={[0.79, 50]} />
        <meshBasicMaterial color={"#BF9742"} />
      </mesh>

      <mesh position={[0.6, 0, 0.12]} castShadow={false} receiveShadow={false}>
        <circleGeometry args={[1.1, 50]} />
        <meshBasicMaterial color={"white"} />
      </mesh>

      <mesh position={[0.6, 0, 0.1]} castShadow={false} receiveShadow={false}>
        <circleGeometry args={[1.3, 50]} />
        <meshBasicMaterial color={"black"} />
      </mesh>
    </>
  );
};

export default DiscAnimation;
