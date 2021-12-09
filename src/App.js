import './App.css';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Html, OrbitControls } from '@react-three/drei';





function App() {

  function Loader() {
    //const { progress } = useProgress()
    //return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
    return <Html center style={{ color: 'white' }}>loading...</Html>
  }

  
  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <pointLight position={[-5, -15, 30]} />
          <Suspense fallback={<Loader />}>
            <Scene />
          </Suspense>


        </Suspense>
      </Canvas>
    </div>

  );
}

export default App;

    