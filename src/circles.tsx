import './styles.css';
import * as math from './math';
import * as react from 'react';

interface CircleConfig {
    amount: number;
    radiusBase: number;
    radiusMax: number;
}

export function Circles({
    amount = 10,
    radiusBase = 200,
    radiusMax = 1000
}: CircleConfig) {

    const circles =
        Array.from({ length: amount }).map((_, i) => {
            const radius = math.map_range(0, amount, i, radiusBase, radiusMax);
            const bounce_offset_up = math.map_range(0, amount, i, 0, 180);
            const bounce_animation_delay = math.map_range(0, amount, i, -50, 0);
            const bounce_animation_cycle = 16.478 * 2.0 * 2.0;
            return (
                <div
                    key={i}
                    className={`
                        circles_styles_bounce
                        rounded-full absolute
                        ${i % 2 === 0 ? "bg-gradient-to-b" : "bg-gradient-to-bl"} from-gray-900 to-gray-500 
                        border-2 border-[748fa4] border-offset-2
                    `}
                    style={{
                        // @ts-ignore
                        '--bounce-offset-up': `${bounce_offset_up}px`,
                        '--bounce-animation-delay': `${bounce_animation_delay}s`,
                        '--bounce-animation-cycle': `${bounce_animation_cycle}s`,
                        width: `${radius}px`,
                        height: `${radius}px`,
                        zIndex: -i,
                        opacity: math.map_range(0, amount, i, 1.0, 0.1),
                    }}
                />
            );
        });



    return (
        <div
            className={`z-[-1] flex h-[0px] w-[0px] relative justify-center items-center`}
        >

            <img
                className={`
                    rounded-full absolute
                    border-2 border-[748fa4] border-offset-2
                `}
                rel="preload"
                src={`./igor_avatar.jpg`}
                style={{
                    minWidth: `${radiusBase}px`,
                    minHeight: `${radiusBase}px`,
                    maxWidth: `${radiusBase}px`,
                    maxHeight: `${radiusBase}px`,
                    width: `${radiusBase}px`,
                    height: `${radiusBase}px`,
                    zIndex: 10000,
                }}
            />

            <div
                className={`circles_styles_rotate_01 flex relative justify-center items-center`}
            >

                {circles}

            </div>

        </div >
    );
}
