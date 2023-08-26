import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, MeshReflectorMaterial } from '@react-three/drei'
import Ball from './Ball.jsx'
import Ground from './Ground.jsx'
import * as THREE from 'three'
import fragmentShader from '../shaders/ground/fragment.glsl'
import { useEffect } from 'react'

export default function Stage(){

    const ref = useRef();
    const trees = useRef();
    const platformRadius = 10;
    const treeCount = 250;
    const treeDistance = 40;

    useEffect(() => {

        for (let i = 0; i < treeCount; i++) {
            const matrix = new THREE.Matrix4();

            let x, z;
            do {
                x = (Math.random() * treeDistance) * (Math.random() < 0.5 ? -1 : 1);
                z = (Math.random() * treeDistance) * (Math.random() < 0.5 ? -1 : 1);
            } while ((x < (platformRadius + 1) && x > -(platformRadius + 1)) && (z < (platformRadius + 1) && z > -(platformRadius + 1)))

            matrix.compose(
                new THREE.Vector3(x, 0, z),
                new THREE.Quaternion(),
                new THREE.Vector3(1, 2.5, 1.5, 0.5)
            )
            trees.current.setMatrixAt(i, matrix);
        }
    }, [])
    // const scroll = useScroll();

    useFrame((state, delta) => {
        // Update camera position based on scroll
        // state.camera.position.set(Math.sin(scroll.offset) * -10, Math.atan(scroll.offset * Math.PI * 2) * 5, Math.cos((scroll.offset * Math.PI) / 3) * -10)
        // state.camera.lookAt(0, 0, 0)

        // console.log(scroll.offset)
    })

    return (
        <>
            {/* Lights */}
            <pointLight intensity={4} position={[10, 10, 5]}/>
            {/* <ambientLight intensity={0.5} /> */}

            {/* Ground */}
            <mesh position={[0, -3, 0]} rotation={[Math.PI * 1.5, 0, 0]}>
                <planeGeometry args={[100, 100, 2, 40]} />
                <meshStandardMaterial color="#a0a0a0"/>
            </mesh>


            {/* Platform */}
            <group>
                <mesh position={[0, -2, 0]}>
                    <cylinderGeometry args={[platformRadius, platformRadius, 2, 40]} />
                    <meshStandardMaterial/>
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[(platformRadius - 4), (platformRadius - 4), 2, 40]} />
                    <meshStandardMaterial/>
                </mesh>
            </group>

            {/* Plants */}

            <instancedMesh ref={trees} args={[null, null, treeCount]}>
                <coneGeometry />
                <meshStandardMaterial color="green"/>
            </instancedMesh>

            <Ball/>
            {/* <Ground /> */}
        </>
    )

}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Ground/shadow shader

// useFrame(({ clock }) => {
//     const elapsedTime = clock.getElapsedTime()
//     ref.current.uniforms.u_Time.value = elapsedTime
// })


{/* <mesh position={[0, -4, 0]}>
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
</mesh> */}