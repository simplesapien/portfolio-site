import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import vertexShader from '../shaders/ball/vertex.glsl'
import fragmentShader from '../shaders/ball/fragment.glsl'

export default function Sphere(){

  const matRef = useRef()

  useFrame((state) => {
      const { clock } = state
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  })

  const uniforms = {
    uTime: { value: 0.0 },
  };

 
  return (
    <>
      <mesh>
        <icosahedronGeometry args={[1, 150]} />
        <shaderMaterial 
          attach="material"
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          ref={matRef}
        />
      </mesh>
    </>
  )
}