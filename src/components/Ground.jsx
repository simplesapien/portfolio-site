import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import vertexShader from '../shaders/ground/vertex.glsl'
import fragmentShader from '../shaders/ground/fragment.glsl'

export default function Ground() {

    const ref = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        ref.current.uniforms.u_Time.value = elapsedTime
    })

    return (
        <mesh
            rotation={[Math.PI * 1.5, 0, 0]}
            position={[0, -2.5, 0]} 
        >
            <planeGeometry args={[5, 5, 100, 100]} />
            <shaderMaterial
                ref={ref}
                uniforms={{
                    u_Time: { value: 0.0 },
                    u_WaveAmplitude: { value: 0.1 },
                    u_WaveFrequency: { value: 1.2 }
                }}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    )
}