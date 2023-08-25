import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import fragmentShader from '../shaders/ground/fragment.glsl'

export default function Podium(){

    const ref = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        ref.current.uniforms.u_Time.value = elapsedTime
    })

    return (
        <>
            <directionalLight intensity={0.5} />
            <ambientLight intensity={0.5} />
            <group>
                <mesh position={[0, -4, 0]}>
                    <cylinderGeometry args={[4, 4, 4, 40]} />
                    <shaderMaterial
                        ref={ref}
                        uniforms={{
                            u_Time: { value: 0.0 },
                        }}
                        vertexShader={`
                            varying vec2 vUv;
                            void main() {
                                vUv = uv;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `}
                        fragmentShader={fragmentShader}
                    />
                </mesh>
            </group>
            
        </>
    )

}