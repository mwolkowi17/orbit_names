import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function SceneText(props) {
    //const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
    const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_3.glb')
    return (
      <>      
       {/*} <primitive object={gltf.scene}  position={props.pos} rotation={props.rot}/>  */}  
       <primitive object={gltf.scene} position={props.pos} rotation={props.rot} scale={[0.5,0.5,0.5]}/>
      </>
    )
  }