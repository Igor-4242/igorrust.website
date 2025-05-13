import * as math from './math';
import * as three from './three';
import * as consts from './consts';
import * as hooks from './hooks';
import './styles.css'

export function App() {

  return (
    <>


      <section
        id={consts.HEAD_LINKS}
        className="flex flex-row justify-center w-full h-fit">
        <div className='sm:w-1/2 flex flex-row w-full h-fit justify-between gap-[42px] py-6'>
          <a href="">
            yeah
          </a>
          <a href="">
            resume.pdf
          </a>
        </div>
      </section>


      <section
        id={consts.MAIN_INFO}
        className='flex flex-col w-full h-fit md:flex-row w-full max-w-[880px] gap-[5px] md:gap-[60px]'>

        <div className='flex flex-col w-full justify-center items-center p-[42px]'>
          <Circles />
        </div>

        <div className='flex flex-col w-full gap-[28px]'>

          <div className='flex flex-col gap-[6px]'>
            <h1>Igor Boiko</h1>
            <h1 className='text-right'>Rust Dev</h1>
          </div>

          <div className='flex flex-col gap-[6px]'>
            <h2>About</h2>
            <div className='flex flex-row'>
              <div className='w-0 sm:w-[30%]'></div>
              <p>
                Quaead dolor vero libero alias quam? Velculpa dolores, quo iusto et sunt. Quaein lorem, unde totam odit, sed. Eveniettotam modi qui, ipsam, modi, tempore! Quaead dolor vero libero alias quam? Velculpa dolores, quo iusto et sunt. Quaein lorem, unde totam odit, sed. Eveniettotam modi qui, ipsam, modi, tempore!
              </p>
              <div className='w-0 sm:w-[30%]'></div>
            </div>
          </div>

          <div className='flex flex-col gap-[6px]'>
            <h2>Get in touch</h2>
            <div className='flex flex-row self-end gap-x-4'>
              <a href="mailto:igorboiko4242@gmail.com">
                Gmail
              </a>
              <a href="https://www.linkedin.com/in/igor-boiko-538524332/">
                LinkedIn
              </a>
              <a href="https://github.com/Igor-4242">
                Github
              </a>
              <a href="https://t.me/Igorfortytwofortytwo">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section >


      <section id={consts.DESCRIPTION} className='flex flex-row w-full h-fit justify-center py-6'>
        <p className='w-full sm:w-1/2 text-center'>
          Website made with React + TailwindCSS + Typescript + Vite + Three.js by Igor Boiko in 2025
        </p>
      </section>


      <section id={consts.BACKGROUND_MAZE} className='z-[-10000000] fixed inset-0'>
        <three.CanvasWithShaderedMaze />
      </section>


    </>
  )
}


function Circles() {
  const amount = 10;
  const base_radius = 200;
  const max_radius = 1000;

  let circles = [];
  let main_circle = null;

  for (let i = 0; i <= amount; i++) {
    const radius = math.map_range(0, amount, i, base_radius, max_radius);

    if (i === amount) {
      main_circle =
        <img
          rel="preload"
          src={`./igor_avatar.jpg`}
          key={i}
          className={`rounded-full absolute`}
          style={{
            minWidth: `${base_radius}px`,
            minHeight: `${base_radius}px`,
            maxWidth: `${base_radius}px`,
            maxHeight: `${base_radius}px`,
            width: `${base_radius}px`,
            height: `${base_radius}px`,
            zIndex: 10000,
          }}
        />
    } else {
      const yPos = hooks.useSinAnimation({
        amplitude: math.map_range(0, amount, i, 0.0, 100.0),
        speed: 0.0001,
        offset: math.map_range(0, amount, i, 0.0, 5.0)
      });

      const circle =
        <div
          key={i}
          className={`${i % 2 === 0 ? "bg-black" : "bg-gray-500"} rounded-full absolute`}
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
            zIndex: -i,
            transform: `translateY(${yPos}px)`
          }}
        />;

      circles.push(circle);
    }

  }

  // const rotation = hooks.useRotationSin({
  //   amplitude: 90,
  //   speed: 0.001
  // });

  const rotation = hooks.useRotationLinear({
    amplitude: 1,
    speed: 0.001
  });

  return (
    <div
      className={`z-[-1] flex h-[${base_radius}px] w-[${base_radius}px] relative justify-center items-center`}
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



