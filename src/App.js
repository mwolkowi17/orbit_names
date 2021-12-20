import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Html, OrbitControls } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';
import { Display } from './Display';

function App() {

  function Loader() {
    //const { progress } = useProgress()
    //return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
    return <Html center style={{ color: 'white' }}>loading...</Html>
  }

  const myMesh = useRef();
  const myControl = useRef();

  const [ifVisible, setIfVisible] = useState('hidden');

  const [active, setActive] = useState(false);
  const [scaleValue, setScaleValue] = useState(1.5);
  const [positionValue, setPositionValue] = useState ([0, 0, 1.2])
  const { scale, position } = useSpring({ scale: active ? scaleValue : 1, position: active ? positionValue : [0, 0, 0], config: config.wobbly })

  /*function positionSet0(){
    if(scaleValue===2){
      setScaleValue(1.5);
    }
    setScaleValue(1.5);
    setActive(!active);
  }*/

  function positionSet1() {   
    setScaleValue(1.5);
    if (active === false) {
      setActive(!active)
    }
    ;
  }

  /*function positionSet2() {
    setScaleValue(2);
    if (active === false) {
      setActive(!active)
    };

  }*/

  function testText(xpos) { 
    console.log('tested');

    setScaleValue(1.2);
    setPositionValue(xpos)
    if (active === false) {
      setActive(!active)
    };
    setIfVisible('visible');
  };

  function closeDisplay(){
    setIfVisible('hidden');
    setActive(!active);
  };

  useEffect(() => {
    if (myControl.current) {
      myControl.current.reset();
    }
  }, [active]);

  return (
    <div>

      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          {/*<PresentationControls snap={true}  polar={[0, Math.PI / 2]} >**/}
          <OrbitControls maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 2.4}
            maxAzimuthAngle={Math.PI * 2.3}
            minAzimuthAngle={-Math.PI * 2.3}
            ref={myControl} />
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <pointLight position={[-5, -15, 30]} />
          <Suspense fallback={<Loader />}>
            <animated.mesh scale={scale} position={position} /*onClick={positionSet0}*/ ref={myMesh}>
              <Scene pos={[4, 3.4, 0.7]}
                rot={[Math.PI * 0.2, 0, 0]}
                over11={()=>testText([0.5, 1.5, 0.2])}
                over21={()=>testText([-1.4, 0.9, 0.2])}
                over31={()=>testText([0, 0, 1.2])}
                over41={()=>testText([-2, -0.5, 1.8])}
                over51={()=>testText([-2, 1.5, 2.8])} 
                over61={()=>testText([-0.5, -2, 2.8])}
                over71={()=>testText([-2.5, -2, 3.2])}
                over81={()=>testText([-3, -0.5, 3.2])}
                over91={()=>testText([1.5, -2, 4.5])}
                over101={()=>testText([0.5, -2, 4])}
                over111={()=>testText([-4, -3.5, 4])}
                over121={()=>testText([1, -4.5, 5])}
                over131={()=>testText([-2, -4.5, 5])}
                over141={()=>testText([-3, -4.5, 5])}/>
            </animated.mesh>
          </Suspense>

          {/*</PresentationControls>*/}
        </Suspense>
      </Canvas>
      <Display displayed={ifVisible} close={closeDisplay} />
    </div>

  );
}

export default App;

