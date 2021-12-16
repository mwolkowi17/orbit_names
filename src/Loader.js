import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { SceneText1 } from './Loadertext1';
import { SceneText2 } from './Loadertext2';
import { SceneText3 } from './Loadertext3';
import { SceneText4 } from './Loadertext4';
import { SceneText5 } from './Loadertext5';
import { SceneText6 } from './Loadertext6';
import { SceneText7 } from './Loadertext7';
import { SceneText8 } from './Loadertext8';
import { SceneText9 } from './Loadertext9';
import { SceneText10 } from './Loadertext10';
import { SceneText11 } from './Loadertext11';
import { SceneText12 } from './Loadertext12';
import { SceneText13 } from './Loadertext13';
import { SceneText14 } from './Loadertext14';

export function Scene(props) {
  //const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
  const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_2.glb')


  //dołożyć animację spring
  return (
    <group position={props.pos} rotation={props.rot} scale={[0.5, 0.5, 0.5]}>
      {/*} <primitive object={gltf.scene}  position={props.pos} rotation={props.rot}/>  */}
      <primitive object={gltf.scene} />
      <SceneText1 over1={props.over11} />
      <SceneText2 over2={props.over21} />
      <SceneText3 over3={props.over31} />
      <SceneText4 over4={props.over41} />
      <SceneText5 over5={props.over51}/>
      <SceneText6 over6={props.over61}/>
      <SceneText7 over7={props.over71}/>
      <SceneText8 over8={props.over81}/>
      <SceneText9 />
      <SceneText10 />
      <SceneText11 />
      <SceneText12 />
      <SceneText13 />
      <SceneText14 />
    </group>
  )
}