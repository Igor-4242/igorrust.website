import './styles.css';
import * as hooks from './hooks';
import * as math from './math';
import * as react from 'react';
import * as state from './state';

interface CircleConfig {
    amount: number;
    radiusBase: number;
    radiusMax: number;
}

const initial_sin_offset = Math.random() * 360;
const initial_rotation = Math.random() * 360;

function uses_position_y_sin(amount: number) {
    const frame = state.use_state_context().frame;
    return react.useMemo(() => {
        return Array.from({ length: amount }).map((_, index) => {
            const amplitude = math.map_range(0, amount, index, 0.0, 100.0);
            const offset = math.map_range(0, amount, index, 0.0, 5.0) + initial_sin_offset;
            const speed = 0.0001;
            const y = amplitude * Math.sin((frame * speed) + offset);
            return y;
        });
    }, [amount, frame]);
}

export function Circles({
    amount = 10,
    radiusBase = 200,
    radiusMax = 1000
}: CircleConfig) {
    const rotation = state.use_state_context().frame * 0.005 + initial_rotation;
    const y_positions = uses_position_y_sin(amount);

    const circles = react.useMemo(() => {
        return Array.from({ length: amount }).map((_, i) => {
            const radius = math.map_range(0, amount, i, radiusBase, radiusMax);
            return (
                <div
                    key={i}
                    className={`
                        ${i % 2 === 0 ? "bg-black" : "bg-gray-500"} 
                        rounded-full absolute
                        ${i % 2 === 0 ? "bg-gradient-to-b" : "bg-gradient-to-bl"} from-gray-900 to-gray-500 
                        border-2 border-blue-400 border-offset-2
                    `}
                    style={{
                        width: `${radius}px`,
                        height: `${radius}px`,
                        zIndex: -i,
                        transform: `translateY(${y_positions[i]}px)`,
                        opacity: math.map_range(0, amount, i, 1.0, 0.1),
                    }}
                />
            );
        });
    }, [amount, radiusBase, radiusMax, y_positions]);


    return (
        <div
            className={`z-[-1] flex h-[0px] w-[0px] relative justify-center items-center`}
        >

            <img
                rel="preload"
                src={`./igor_avatar.jpg`}
                className={`rounded-full absolute`}
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
                className={`flex relative justify-center items-center`}
                style={{
                    transform: `rotate(${rotation}deg)`
                }}>

                {circles}

            </div>

        </div>
    );
}
