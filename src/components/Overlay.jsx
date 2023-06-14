export default function Overlay() {
    return (
        <mesh>
            <planeBufferGeometry args={[2, 2, 1, 1]} />
            <shaderMaterial
                vertexShader={`
                    void main() {
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    void main() {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                    }
                `}
                uniforms={{
                    uTime: { value: 0 }
                }}
            />
        </mesh>
    )
}