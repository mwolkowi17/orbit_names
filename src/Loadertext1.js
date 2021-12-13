import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useState } from 'react'


export function SceneText1(props) {

  const gltf = useLoader(GLTFLoader, '/orbit_for_fiber2_text1.glb')

  const [hovered, setHover] = useState(false)

  hovered ? console.log('hovered') : console.log('idle');
  // it should be full object operation pos/rot
  return (
    <>
      <primitive object={gltf.scene}

        onPointerOver={props.over1}
        onPointerOut={(e) => setHover(false)} />
    </>
  )
}