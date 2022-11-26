import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function App() {

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <mesh rotation-x={-Math.PI/2} position={[0, -16, 17]}>
            <planeGeometry args={[145, 50]}/>
            <meshBasicMaterial color="#D7D5D5"/>
          </mesh>
          <mesh position={[0, 9.5, -8]}>
            <planeGeometry args={[145, 51]}/>
            <meshBasicMaterial color="#CACACA"/>
          </mesh>
          <mesh position={[0, -11, 0]}>
            <boxGeometry args={[10, 10, 10]}/>
            <meshBasicMaterial color="blue"/>
          </mesh>
        </Suspense>
        <PerspectiveCamera
            makeDefault
            aspect={(window.innerWidth * 0.66) / window.innerHeight}
            near={1}
            far={1000}
            fov={40}
            position={[0, 5, 90]}
          />
          <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
