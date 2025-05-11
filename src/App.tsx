import './styles.css'
import math from './math';

export default function App() {

  return (
    <>

      <section className="flex flex-row w-full h-fit justify-center gap-[42px] py-12">
        <a href="">
          Quaein
        </a>
        <a href="">
          Quaein
        </a>
        <a href="">
          resume.pdf
        </a>
      </section>



      <section className='flex flex-col w-full h-fit md:flex-row w-full max-w-[880px] gap-[5px] md:gap-[60px]'>

        <div className='flex flex-col w-full justify-center items-center p-[42px]'>
          <Circles />
        </div>

        <div className='flex flex-col w-full gap-[28px]'>

          {/* Igor */}
          <div className='flex flex-col gap-[6px]'>
            <h1>Igor Boiko</h1>
            <h1 className='text-right'>Rust Dev</h1>
          </div>

          {/* About */}
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

          {/* Contact */}
          <div className='flex flex-col gap-[6px]'>
            <h2>Get in touch</h2>
            <div className='flex flex-row self-end gap-x-4'>
              <a href="">
                Gmail
              </a>
              <a href="">
                Linkedin
              </a>
              <a href="">
                Github
              </a>
              <a href="">
                Telegram
              </a>
            </div>
          </div>

        </div>

      </section >

      <section className='flex flex-row w-full h-fit justify-center py-12'>
        <p className='w-full  sm:w-1/2 text-center'>
          Quaead dolor vero libero alias quam? Velculpa dolores, quo iusto et sunt. Quaein lorem, unde totam odit, sed. Eveniettotam modi qui, ipsam, modi, tempore!
        </p>
      </section>

    </>
  )
}


function Circles() {
  const amount = 12;
  const base_radius = 200;
  const max_radius = 1000;

  let circles = [];

  for (let i = 0; i <= amount; i++) {
    const radius = math.map_range(0, amount, i, base_radius, max_radius);

    if (i === amount) {
      circles.push(
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
          }
          }
        />
      );
    } else {
      circles.push(
        <div
          key={i}
          className={`${i % 2 === 0 ? "bg-black" : "bg-gray-500"} rounded-full absolute`}
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
            zIndex: -i,
          }}
        />
      );
    }

  }

  return (
    <div className={`z-[-1] flex h-[${base_radius}px] w-[${base_radius}px] relative justify-center items-center`}>
      {circles}
    </div>
  );
}