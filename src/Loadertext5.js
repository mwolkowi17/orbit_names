import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function SceneText5(props) {
    const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_text5.glb')
    return (
      <>      
       <primitive object={gltf.scene} position={props.pos} rotation={props.rot} scale={[0.5,0.5,0.5]}/>
      </>
    )
  }