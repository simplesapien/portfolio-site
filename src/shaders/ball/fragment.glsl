uniform float uTime;
varying vec3 vPosition;

varying float vDisplacement;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    // Gradient Color Based on Displacement
    vec3 purple = vec3(166.0/255.0, 52.0/255.0, 235.0/255.0);  // #a634eb
    vec3 darkBlue = vec3(36.0/255.0, 111.0/255.0, 200.0/255.0); // #246fc8
	vec3 green = vec3(0.565, 0.839, 0.651);  // Background green
    // slightly darker green
    vec3 darker_green = vec3(0.565, 0.839, 0.651) * 0.4;

    vec3 gradientColor = mix(darker_green, green, vDisplacement);

    // Lighting Effect
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5)); // Light direction
    float NdotL = max(dot(vNormal, lightDir), 0.3);

    // Soften the lighting effect
    float softLight = pow(NdotL, 0.5);  // The 0.5 value can be adjusted for the desired softness

    // Combine Gradient and Lighting
    vec3 finalColor = gradientColor * softLight;

    gl_FragColor = vec4(finalColor, 1.0);
}
















