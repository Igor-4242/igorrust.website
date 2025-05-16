import * as react from 'react';

// interface AnimationConfig {
//     amplitude: number;
//     speed: number;
//     offset: number;
// }

// export function use_animation_sin({
//     amplitude = 20,
//     speed = 1.0,
//     offset = 0
// }: AnimationConfig): number {
//     const [value, set_value] = react.useState<number>(0);

//     react.useEffect(() => {
//         const startTime = Date.now();

//         const animate = (currentTime: number) => {
//             const elapsed = currentTime - startTime;
//             const val = amplitude * Math.sin(elapsed * speed + offset);
//             set_value(val);
//             requestAnimationFrame(animate);
//         };

//         requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(requestAnimationFrame(animate));
//     }, [/* no deps */]);

//     return value;
// }

// export function use_animation_linear({
//     amplitude = 360,
//     speed = 1.0,
//     offset = 0.0
// }: AnimationConfig): number {
//     const [value, set_value] = react.useState<number>(0);

//     react.useEffect(() => {
//         const startTime = Date.now();

//         const animate = (currentTime: number) => {
//             const elapsed = currentTime - startTime;
//             const val = amplitude * elapsed * speed + offset;
//             set_value(val);
//             requestAnimationFrame(animate);
//         };

//         requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(requestAnimationFrame(animate));
//     }, [/* no deps */]);

//     return value;
// }


export function use_tick_frame() {
    const [, setTick] = react.useState(0);
    const frame = react.useRef(0);

    react.useEffect(() => {
        let id: number;
        const update = () => {
            frame.current += 1;
            setTick(frame.current);
            id = requestAnimationFrame(update);
        };
        id = requestAnimationFrame(update);
        return () => cancelAnimationFrame(id);
    }, []);

    return frame.current;
}

export function use_linear_rotation(speed = 0.05, offset = 0) {
    const frame = use_tick_frame();
    return offset + frame * speed;
}


