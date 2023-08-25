varying vec2 vUv;

uniform float u_Time;   
uniform float u_WaveAmplitude;
uniform float u_WaveFrequency;

void main() {
    vUv = uv;

    // Calculate a simple sine wave displacement for the y-position
    float yOffset = u_WaveAmplitude * sin(u_WaveFrequency * position.x + u_Time);

    vec3 warpedPosition = vec3(position.x, position.y + yOffset, position.z);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(warpedPosition, 1.0);
}
