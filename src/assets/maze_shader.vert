// #version 450 core

varying vec2 vUv;

void main() {
    vUv = uv * 10.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
