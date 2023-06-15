import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scroll, ScrollControls } from '@react-three/drei'
import Scene from './Scene.jsx';

export default function App () {
    
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // get screen size
        if (window.innerWidth < 600) setIsDesktop(false);
    }, []);

    return (
        <>
            <Canvas
                shadows
                camera={{ position: [0, 0, 25], fov: 25 }}
            >
                {isDesktop && <OrbitControls enableZoom={false} />}
                <ScrollControls pages={3} damping={0.25} >
                    <Scene />
                </ScrollControls>
            </Canvas>
        </>
    );
}
