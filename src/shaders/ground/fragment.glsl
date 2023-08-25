varying vec2 vUv;

void main() {

    vec2 center = vec2(0.5);
    float inner_radius = 0.15;
    float outer_radius = 0.5;

    float distanceToCenter = length(vUv - center);
    
    float feather = smoothstep(inner_radius, outer_radius, distanceToCenter);

    vec4 circleColor = vec4(0.0, 0.0, 0.0, 0.4); // Black
    vec4 bgColor = vec4(0.565, 0.839, 0.651, 1.0); // Color #90d6a6

    gl_FragColor = mix(circleColor, bgColor, feather);
}
