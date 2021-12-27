import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, useEffect, useState } from 'react'


export function SceneText9(props) {
  const gltf = useLoader(GLTFLoader, '/test/orbit_names/orbit_for_fiber2_text9.glb')

  const textRef = useRef();

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <>
      <group>
        <mesh ref={textRef}>
          <primitive object={gltf.scene}
            onClick={props.over9}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)} />
        </mesh>
        {/* <Html className='text3' transform occlude={[textRef]} position={[-8,-2.5,6.5]} />*/}
      </group>
    </>
  )
}