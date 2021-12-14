import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function SceneText13(props) {
    const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_text13.glb')
    return (
      <>      
       <primitive object={gltf.scene} />
      </>
    )
  }