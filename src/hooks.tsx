import * as react from 'react';

interface SineAnimationConfig {
    amplitude: number;
    speed: number;
    offset: number;
}

export function useSinAnimation({
    amplitude = 20,
    speed = 1.0,
    offset = 0
}: SineAnimationConfig): number {
    const [position, setPosition] = react.useState<number>(0);

    react.useEffect(() => {
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const yPos = amplitude * Math.sin(elapsed * speed + offset);
            setPosition(yPos);

            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [amplitude]);

    return position;
}



interface RotationConfig {
    amplitude: number;
    speed: number;

}

export function useRotationSin({
    amplitude = 360,
    speed = 1.0
}: RotationConfig): number {
    const [rotation, setRotation] = react.useState<number>(0);

    react.useEffect(() => {
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const angle = amplitude * Math.sin(elapsed * speed);
            setRotation(angle);

            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [amplitude]);

    return rotation;
}

export function useRotationLinear({
    amplitude = 360,
    speed = 1.0
}: RotationConfig): number {
    const [rotation, setRotation] = react.useState<number>(0);

    react.useEffect(() => {
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const angle = amplitude * elapsed * speed;
            setRotation(angle);

            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [amplitude]);

    return rotation;
}
