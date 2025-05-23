import './styles.css'
import * as fiber from '@react-three/fiber'
import * as react from 'react'
import * as three from 'three'
import maze_shader_frag from './assets/maze_shader.frag?raw';
import maze_shader_vert from './assets/maze_shader.vert?raw';

function ShaderedMazePlane() {
    const planeMeshRef = react.useRef<three.Mesh>(null!)
    const materialRef = react.useRef<three.ShaderMaterial>(null!)
    // fiber.useFrame((_, delta) => (planeMeshRef.current.rotation.z += delta * 2.0));

    fiber.useFrame((state, _delta) => {
        materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    })

    return (
        <mesh
            ref={planeMeshRef}
        >
            <planeGeometry args={[30, 30, 1]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={maze_shader_vert}
                fragmentShader={maze_shader_frag}
                uniforms={{
                    uTime: { value: 0 }
                }}
            />
        </mesh>
    )
}


export function CanvasWithShaderedMaze() {
    return (
        <fiber.Canvas
            gl={{
                antialias: true,
            }}
            shadows={false}
            orthographic={true}
            camera={{ position: [0, 0, 100], zoom: 100 }}
        >
            <ShaderedMazePlane />
        </fiber.Canvas>
    )
}

