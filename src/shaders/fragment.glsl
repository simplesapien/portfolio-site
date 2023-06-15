uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 1.2 * vDisplacement * u_intensity;

  vec3 color = vec3(abs(vUv - 0.5) * 1.0  * (1.5 - distort), 0.5);
  
  gl_FragColor = vec4(color, 1.0);
}