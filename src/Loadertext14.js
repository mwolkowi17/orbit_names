import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function SceneText14(props) {
    const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_text14.glb')
    return (
      <>      
       <primitive object={gltf.scene} />
      </>
    )
  }