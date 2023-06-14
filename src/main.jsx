import './index.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { Perf } from 'r3f-perf'

console.log(`A bit of a work in progress. \n\nCheck out what I'm working on here: https://github.com/simplesapien. \nOr drop me a line here: https://www.linkedin.com/in/kevan-haggins/`)

createRoot(document.getElementById('root')).render(
    <>
        <Canvas
            shadows
            camera={{ position: [0, 0, 25], fov: 25 }}
        >
            < Perf />
            <OrbitControls makeDefault />
            <App />
        </Canvas>
    </>
)