import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function SceneText8(props) {
    const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_text8.glb')
    return (
      <>      
       <primitive object={gltf.scene} position={props.pos} rotation={props.rot} scale={[0.5,0.5,0.5]}/>
      </>
    )
  }