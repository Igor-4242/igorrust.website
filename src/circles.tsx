import * as math from './math';
import * as hooks from './hooks';
import './styles.css';

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

    const initial_sin_offset = Math.random() * 360;
    const initial_rotation = Math.random() * 360;

    const rotation = hooks.use_animation_linear({
        amplitude: 1,
        speed: 0.5,
        offset: initial_rotation
    });


    return (
        <div
            className={`z-[-1] flex h-[0px] w-[0px] relative justify-center items-center`}
        >

            <img
                rel="preload"
                src={`./igor_avatar.jpg`}
                key={9999999}
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

            {/* 
                There is two hooks: "rotation" and "y_position". 
                It lags only when:
                1. There is child component transformed by hook in a parent component thats also transformed by hook.
                2. When a component transformed by two hooks at the same time.

                WTF do I do? (without rewriting hooks to GPU accelerated css styles cz i might want to use GSAP or some similar animation library in near future)
            */}

            <div
                className={`flex relative justify-center items-center`}
                style={{
                    transform: `rotate(${rotation}deg)`
                }}>

                {
                    Array.from({ length: amount }).map((_, i) => {
                        const radius = math.map_range(0, amount, i, radiusBase, radiusMax);

                        const y_position = hooks.use_animation_sin({
                            amplitude: math.map_range(0, amount, i, 0.0, 100.0),
                            speed: 0.0001,
                            offset: math.map_range(0, amount, i, 0.0, 5.0) + initial_sin_offset
                        });

                        return <div
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
                                transform: `translateY(${y_position}px)`,
                                opacity: math.map_range(0, amount, i, 1.0, 0.1),
                            }}
                        />
                    })
                }

            </div>

        </div>
    );
}
