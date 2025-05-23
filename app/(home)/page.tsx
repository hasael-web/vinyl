"use client";

import { Canvas } from "@react-three/fiber";
import DiscAnimation from "./__components/disc-animation";
import DiscCover from "./__components/disc-cover";

export default function Home() {
  return (
    <div className="h-screen w-screen ">
      <Canvas camera={{ position: [0, 0, 10], fov: 18 }}>
        <directionalLight position={[5, 0, 10]} intensity={5} />
        <ambientLight intensity={1} />
        <DiscAnimation />
        <DiscCover />
      </Canvas>
    </div>
  );
}
