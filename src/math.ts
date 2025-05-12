export default class math {
    static map_range =
        (a1: number, a2: number, val: number, b1: number, b2: number): number =>
            (val - a1) / (a2 - a1) * (b2 - b1) + b1;

    static percentage =
        (whole: number, percent: number): number =>
            (whole / 100) * percent;

    static lerp =
        (a: number, b: number, t: number): number =>
            a + t * (b - a);

    static solve_for_c =
        (a: number, b: number, d: number): number =>
            (a * d) / b;

    static solve_for_d =
        (a: number, b: number, c: number): number =>
            (b * c) / a;
}