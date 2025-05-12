import * as three from 'three'
import * as react from 'react'
import * as fiber from '@react-three/fiber'
import maze_shader_vert from './assets/maze_shader.vert?raw';
import maze_shader_frag from './assets/maze_shader.frag?raw';
import './styles.css'


// function TestBox(props: fiber.ThreeElements['mesh']) {
//     const meshRef = react.useRef<three.Mesh>(null!)
//     const [hovered, setHover] = react.useState(false)
//     const [active, setActive] = react.useState(false)

//     fiber.useFrame((_, delta) => (meshRef.current.rotation.x += delta));

//     return (
//         <mesh
//             {...props}
//             ref={meshRef}
//             scale={active ? 3.5 : 1}
//             onClick={(_) => setActive(!active)}
//             onPointerOver={(_) => setHover(true)}
//             onPointerOut={(_) => setHover(false)}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
//         </mesh>
//     )
// }

// export function TestThreeCanvas() {
//     return (
//         <fiber.Canvas>
//             <ambientLight intensity={Math.PI / 2} />
//             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
//             <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//             <TestBox position={[-1.2, 0, 0]} />
//             <TestBox position={[1.2, 0, 0]} />
//         </fiber.Canvas>
//     )
// }


function ShaderedMaze() {
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
            <planeGeometry args={[25, 25, 1]} />
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
        <fiber.Canvas >
            <ShaderedMaze />
        </fiber.Canvas>
    )
}

