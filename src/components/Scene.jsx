import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Stage from './Stage.jsx';

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
                camera={{ position: [4, 4, 12] }}
            >   
                {/* <Perf position="bottom-left"/> */}
                {/* <ScrollControls pages={5}>              */}
                <OrbitControls />
                <Stage />
                {/* </ScrollControls> */}
            </Canvas>
        </>
    );
}
