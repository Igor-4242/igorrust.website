uniform float uTime;
varying vec2 vUv;

void main() {
    float color = length(abs(sin((vUv + vec2(uTime * 0.001, uTime * 0.001)) * 100.0))) * 0.1;

	gl_FragColor = vec4(
        color,
        color,
        color,
        1.0
    );
}

