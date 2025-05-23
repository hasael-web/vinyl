"use client";

import { Canvas } from "@react-three/fiber";
import DiscAnimation from "./__components/disc-animation";
import DiscCover from "./__components/disc-cover";

export default function Home() {
  return (
    <div className="h-screen w-screen ">
      <Canvas camera={{ position: [0, 0, 10], fov: 22 }}>
        <ambientLight intensity={0.01} />
        <DiscAnimation />
        <DiscCover />
      </Canvas>
    </div>
  );
}
