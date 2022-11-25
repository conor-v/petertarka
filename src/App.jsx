import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function App() {

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <mesh rotation-x={-Math.PI/2} position-y={-5}>
            <planeGeometry args={[100, 100]}/>
            <meshBasicMaterial color="red"/>
          </mesh>
          <mesh >
            <boxGeometry />
            <meshBasicMaterial color="blue"/>
          </mesh>
        </Suspense>
        <PerspectiveCamera
            makeDefault
            aspect={(window.innerWidth * 0.66) / window.innerHeight}
            near={1}
            far={1000}
            fov={40}
            position={[0, 0, 50]}
          />
          <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
