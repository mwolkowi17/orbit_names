import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function SceneText6(props) {
    const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_text6.glb')
    return (
      <>      
       <primitive object={gltf.scene} />
      </>
    )
  }