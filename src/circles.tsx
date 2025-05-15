import * as math from './math';
import * as hooks from './hooks';
// import * as react from 'react';
import './styles.css';



// const MemoedCircles =
//     react.memo(({
//         amount = 10,
//         radiusBase = 200,
//         radiusMax = 1000
//     }: CircleConfig) => {
//         return <InnerCircles amount={amount} radiusBase={radiusBase} radiusMax={radiusMax} />
//     });


interface CircleConfig {
    amount: number;
    radiusBase: number;
    radiusMax: number;
}


function generateCircles({
    amount = 10, radiusBase = 200, radiusMax = 1000
}: CircleConfig) {
    const circles = [];


    for (let i = 0; i < amount; i++) {
        const radius = math.map_range(0, amount, i, radiusBase, radiusMax);

        const yPos = hooks.useSinAnimation({
            amplitude: math.map_range(0, amount, i, 0.0, 100.0),
            speed: 0.0001,
            offset: math.map_range(0, amount, i, 0.0, 5.0)
        });

        circles.push(
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
                    transform: `translateY(${yPos}px)`,
                    opacity: math.map_range(0, amount, i, 1.0, 0.1),
                }}
            />
        );
    }

    return circles;
}

function InnerCircles({
    amount = 10,
    radiusBase = 200,
    radiusMax = 1000
}: CircleConfig) {

    let main_circle =
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
        />;

    // const circles = react.useMemo(() =>
    //     generateCircles({ amount, radiusBase, radiusMax }),
    //     [amount, radiusBase, radiusMax]
    // );
    const circles = generateCircles({ amount, radiusBase, radiusMax });


    const initial_rotation = Math.random() * 360;
    const rotation = hooks.useRotationLinear({
        amplitude: 1,
        speed: 0.005,
        // speed: 0.1,
        offset: initial_rotation
    });


    return (
        <div
            className={`z-[-1] flex h-[0px] w-[0px] relative justify-center items-center`}
        >

            {main_circle}

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


export const Circles = InnerCircles;
