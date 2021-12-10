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

export function Scene(props) {
  //const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
  const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_2.glb')



  return (
    <group position={props.pos} rotation={props.rot} scale={[0.5, 0.5, 0.5]}>
      {/*} <primitive object={gltf.scene}  position={props.pos} rotation={props.rot}/>  */}
      <primitive object={gltf.scene} />
      <SceneText1 />
      <SceneText2 />
      <SceneText3 />
      <SceneText4 />
      <SceneText5 />
      <SceneText6 />
      <SceneText7 />
      <SceneText8 />
    </group>
  )
}