import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useState } from 'react'
import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'


export default function Scene() {

    const mesh = useRef();
    const scroll = useScroll()
    let isScrolling = false;
    let prevScroll = scroll.offset;

    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
            u_intensity: {
                value: 0.1,
            },
            u_frequency: {
                value: 0.5,
            },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

        if (scroll.offset > prevScroll || scroll.offset < prevScroll) {
            isScrolling = true;
        } else {
            isScrolling = false;
        }
        prevScroll = scroll.offset;

        mesh.current.material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            isScrolling ? 0.65 : 0.15,
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
                <mesh
                    ref={mesh}
                    rotation={[Math.PI * 1.5, 0, 0]}
                >
                    <icosahedronGeometry args={[2, 20]} />
                    <shaderMaterial
                        fragmentShader={fragmentShader}
                        vertexShader={vertexShader}
                        uniforms={uniforms}
                    />
                </mesh>
        </>
    )
}
