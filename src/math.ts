export const map_range =
    (a1: number, a2: number, val: number, b1: number, b2: number): number =>
        (val - a1) / (a2 - a1) * (b2 - b1) + b1;

export const percentage =
    (whole: number, percent: number): number =>
        (whole / 100) * percent;

export const lerp =
    (a: number, b: number, t: number): number =>
        a + t * (b - a);

export const solve_for_c =
    (a: number, b: number, d: number): number =>
        (a * d) / b;

export const solve_for_d =
    (a: number, b: number, c: number): number =>
        (b * c) / a;