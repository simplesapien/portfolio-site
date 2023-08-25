import './stylesheets/index.css'
import './stylesheets/template.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Scene from './components/Scene.jsx'
import Template from './components/Template.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Template />
        <Scene />
    </>
)