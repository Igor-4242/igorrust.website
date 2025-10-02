import './styles.css'
import * as fiber from '@react-three/fiber'
import * as react from 'react'
import * as three from 'three'
import maze_shader_frag from './assets/maze_shader.frag?raw';
import maze_shader_vert from './assets/maze_shader.vert?raw';

function ShaderedMazePlane() {
    const planeMeshRef = react.useRef<three.Mesh>(null!)
    const materialRef = react.useRef<three.ShaderMaterial>(null!)
    // const mousePosition = react.useRef<three.Vector2>(new three.Vector2(0, 0))

    // react.useEffect(() => {
    //     const handleMouseMove = (event: any) => {
    //         mousePosition.current.x = event.clientX
    //         mousePosition.current.y = event.clientY
    //     }

    //     window.addEventListener('mousemove', handleMouseMove)
    //     return () => window.removeEventListener('mousemove', handleMouseMove)
    // }, [])


    fiber.useFrame((state, _delta) => {
        const { width, height } = state.size;

        materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
        materialRef.current.uniforms.uResolution.value = new three.Vector2(width, height)
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
                    uTime: { value: 0 },
                    uMouse: { value: new three.Vector2(0, 0) },
                    uResolution: { value: new three.Vector2(400.0, 400.0) },
                }}
            />
        </mesh>
    )
}


export function CanvasWithShaderedWaves() {
    return (
        <fiber.Canvas
            gl={{
                antialias: false,
                depth: false,
            }}
            shadows={false}
            orthographic={true}
            camera={{ position: [0, 0, 100], zoom: 100 }}
        >
            <ShaderedMazePlane />
        </fiber.Canvas>
    )
}

