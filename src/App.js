import './App.css';
import React, { useState } from "react";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Html, OrbitControls } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three'

function App() {

  function Loader() {
    //const { progress } = useProgress()
    //return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
    return <Html center style={{ color: 'white' }}>loading...</Html>
  }

  const myMesh = React.useRef();
  const [active, setActive] = useState(false);
  const [scaleValue, setScaleValue] = useState (1.5)
  const { scale } = useSpring({ scale: active ? scaleValue : 1, config: config.wobbly,})
  
  /*function positionSet0(){
    if(scaleValue===2){
      setScaleValue(1.5);
    }
    setScaleValue(1.5);
    setActive(!active);
  }*/

  function positionSet1(){
   setScaleValue(1.5);
   if(active===false){
      setActive(!active)
   }
   ;
  }

  function positionSet2(){
    setScaleValue(2);
    if(active===false){
      setActive(!active)
    };
    
  }

  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          {/*<PresentationControls snap={true}  polar={[0, Math.PI / 2]} >**/}
          <OrbitControls maxPolarAngle={Math.PI / 1.6}
                         minPolarAngle={Math.PI/2.4}
                         maxAzimuthAngle={Math.PI*2.3}
                         minAzimuthAngle={-Math.PI *2.3}/>
            <ambientLight />
            <pointLight position={[10, 20, 10]} />
            <pointLight position={[-5, -15, 30]} />
            <Suspense fallback={<Loader />}>
            <animated.mesh scale={scale} /*onClick={positionSet0}*/ ref={myMesh}>
              <Scene pos={[4, 3, 0]} 
                     rot={[Math.PI * 0.2, 0, 0]}
                     over11={positionSet1}
                     over31={positionSet2} />
            </animated.mesh>
            </Suspense>

          {/*</PresentationControls>*/}
        </Suspense>
      </Canvas>
    </div>

  );
}

export default App;

