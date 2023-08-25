import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Ball from './Ball.jsx';
import Ground from './Ground.jsx';
import Podium from './Podium.jsx';

export default function App () {
    
    // const [isDesktop, setIsDesktop] = useState(false);

    // useEffect(() => {
    //     if (window.innerWidth < 600) setIsDesktop(false);
    //     else setIsDesktop(true);
    // }, []);

    return (
        <>
            <Canvas
                shadows
                camera={{ position: [4, 4, 12], fov: 24 }}
            >   
                <Perf />
                <OrbitControls />
                <Ball />
                {/* <Ground /> */}
                <Podium />
            </Canvas>
        </>
    );
}
