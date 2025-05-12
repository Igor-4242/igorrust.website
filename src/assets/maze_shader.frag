// #version 450 es

uniform float uTime;
varying vec2 vUv;

vec3 get_random_vec3(float id) {
    float r = fract(sin(id * 12.9898) * 43758.5453);
    float g = fract(sin(id * 78.233 + 12.9898) * 43758.5453);
    float b = fract(sin(id * 53.539 + 78.233) * 43758.5453);
    
    return vec3(r, g, b);
}

vec2 get_random_vec2(float id) {
    float r = fract(sin(id * 12.9898) * 43758.5453);
    float g = fract(sin(id * 78.233 + 12.9898) * 43758.5453);
    
    return vec2(r, g);
}

float get_random_float(float id, float seed) {
    float r = fract(sin(id * 12.9898 + seed)  * 43758.5453);
    return r;
}


float hash(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float gradient(vec2 n, vec2 x) {
    vec2 c = floor(x);
    vec2 f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    
    float v1 = hash(c);
    float v2 = hash(c + vec2(1.0, 0.0));
    return mix(v1, v2, u.x);
}

float perlinNoise(vec2 st) {
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);
    
    float bl = gradient(i_st, f_st);
    float br = gradient(i_st + vec2(1.0, 0.0), f_st);
    float b = mix(bl, br, f_st.x);
    
    float tl = gradient(i_st + vec2(0.0, 1.0), f_st);
    float tr = gradient(i_st + vec2(1.0, 1.0), f_st);
    float t = mix(tl, tr, f_st.x);
    
    return mix(b, t, f_st.y);
}

void main() {
    vec2 vuv = fract(vUv * 0.01);

    // vec2 random_per_cell = vec2(
    //     get_random_float(trunc(vUv.x * 100.0), uTime / 1000.0 + 1248.2154),
    //     get_random_float(trunc(vUv.y * 100.0), uTime / 1000.0 + 9485.0024)
    // );
    // vec2 random_per_cell = perlinNoise(vuv);

	gl_FragColor = vec4(perlinNoise(vUv), 0.0, 0.0, 1.0);
}

