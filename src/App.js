import './App.css';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Html, OrbitControls, PresentationControls } from '@react-three/drei';





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
          <PresentationControls snap={true}  polar={[0, Math.PI / 2]} >
            <ambientLight />
            <pointLight position={[10, 20, 10]} />
            <pointLight position={[-5, -15, 30]} />
            <Suspense fallback={<Loader />}>
              <Scene pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
            </Suspense>

          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>

  );
}

export default App;

