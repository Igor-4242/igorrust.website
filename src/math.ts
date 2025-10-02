export function map_range(a1: number, a2: number, val: number, b1: number, b2: number): number {
    return (val - a1) / (a2 - a1) * (b2 - b1) + b1;
}

export function percentage(whole: number, percent: number): number {
    return (whole / 100) * percent;
}

export function lerp(a: number, b: number, t: number): number {
    return a + t * (b - a);
}

export function solve_for_c(a: number, b: number, d: number): number {
    return (a * d) / b;
}

export function solve_for_d(a: number, b: number, c: number): number {
    return (b * c) / a;
}