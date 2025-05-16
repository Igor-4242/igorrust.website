import * as react from 'react';

export function use_animation_linear_default(): number {
    const [value, set_value] = react.useState<number>(0);

    react.useEffect(() => {
        const startTime = Date.now();
        let id: number;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            set_value(elapsed);
            id = requestAnimationFrame(animate);
        };

        id = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(id);
    }, [/* no deps */]);

    return value;
}

export function use_animation_linear(
    speed = 0.05,
    offset = 0
) {
    const frame = use_animation_linear_default();
    return (offset + frame) * speed;
}


