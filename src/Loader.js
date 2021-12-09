import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Scene(props) {
    //const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
    const gltf = useLoader(GLTFLoader, '/orbit_for_fiber1.glb')
    return (
      <>      
       {/*} <primitive object={gltf.scene}  position={props.pos} rotation={props.rot}/>  */}  
       <primitive object={gltf.scene} />
      </>
    )
  }