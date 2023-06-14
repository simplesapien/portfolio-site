import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useProgress, Stage, shaderMaterial } from '@react-three/drei'
import { Suspense } from 'react'
import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'
import { useFrame } from '@react-three/fiber'


export default function App() {

    const mesh = useRef();
    const hover = useRef(false);

    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
            u_intensity: {
                value: 0.1,
            },
            u_frequency: {
                value: 0.4,
            },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

        mesh.current.material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 0.65 : 0.15,
            0.02
        );
    })

    // function Loader() {
    //     const { progress } = useProgress()
    //     if (progress === 100) {
    //         document.getElementById('overlay').style.opacity = 0
    //         document.getElementById('overlay').style.zIndex = -1
    //         document.getElementById('root').style.opacity = 1
    //     }
    // }

    return (
        <>
            {/* <Loader /> */}
            <mesh
                ref={mesh}
                rotation={[Math.PI * 1.5, 0, 0]}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
            >
                <icosahedronGeometry args={[2, 20]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    side={THREE.DoubleSide}
                />
            </mesh>

        </>
    )
}
