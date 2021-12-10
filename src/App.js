import './App.css';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import {  SceneText1 } from './Loadertext1';
import {  SceneText2 } from './Loadertext2';
import {  SceneText3 } from './Loadertext3';
import {  SceneText4 } from './Loadertext4';
import {  SceneText5 } from './Loadertext5';
import {  SceneText6 } from './Loadertext6';
import {  SceneText7 } from './Loadertext7';
import {  SceneText8 } from './Loadertext8';
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
          {/*<PresentationControls snap={true}  polar={[0, Math.PI / 2]} >**/}
          <OrbitControls/>
            <ambientLight />
            <pointLight position={[10, 20, 10]} />
            <pointLight position={[-5, -15, 30]} />
            <Suspense fallback={<Loader />}>
              <Scene pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText1 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText2 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText3 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText4 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText5 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText6 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText7 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
              <SceneText8 pos={[4, 3, 0]} rot={[Math.PI * 0.2, 0, 0]} />
            </Suspense>

          {/*</PresentationControls>*/}
        </Suspense>
      </Canvas>
    </div>

  );
}

export default App;

