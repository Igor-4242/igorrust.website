// import * as three from './three';
import * as consts from './consts';
import * as circles from './circles';
import './styles.css'


export function App() {


  return (
    <>


      <section
        id={consts.HEAD_LINKS}
        className="flex flex-row w-full justify-center h-fit">
        <div className='flex flex-col md:flex-row w-[90%] md:w-1/2 h-fit justify-between md:gap-[42px] gap-[6px] py-6'>

          <div className='flex flex-row self-end md:self-start gap-x-4'>
            <a href={consts.SOCIALS_LINKEDIN}>
              LinkedIn
            </a>
            <a href={consts.SOCIALS_MAILTO}>
              Gmail
            </a>
            <a href={consts.SOCIALS_GITHUB}>
              Github
            </a>
            <a href={consts.SOCIALS_TELEGRAM}>
              Telegram
            </a>
          </div>

          <div className='self-end'>
            <a href={consts.DOWNLOAD_PDF_RESUME} >
              Download Resume
            </a>
          </div>

        </div>
      </section>


      <section
        id={consts.MAIN_INFO}
        className='flex flex-col md:flex-row w-full h-fit max-w-[1200px] gap-[5px] md:gap-[60px]'>

        <div className='md:hidden flex h-[90px]'></div>

        <div className='flex flex-col w-full justify-center items-center p-[42px]'>
          <circles.Circles amount={10} radiusBase={200} radiusMax={1000} />
        </div>

        <div className='md:hidden flex h-[60px]'></div>

        <div className='flex flex-col w-full justify-center items-center gap-[28px]'>
          <div className='flex flex-col w-[90%] max-w-[550px] min-w-[0px] md:min-w-[440px] justify-center items-center gap-[28px]'>


            <div className='flex flex-col w-full gap-[6px]'>
              <a href={consts.SOCIALS_LINKEDIN}>
                <h1 className='text-[48px] font-extrabold'>Igor Boiko</h1>
              </a>
              <h1 className='text-[38px] text-right text-yellow-600'>Senior Rust Developer & Teamlead</h1>
            </div>

            <div className='flex flex-col w-full gap-[6px]'>
              <h2>About</h2>
              <div className='flex flex-col justify-center items-center'>
                <div className='w-[80%] flex flex-col gap-2'>
                  <p >
                    🪐 I'm a <span className='p_acc'>Rust</span> developer for 4.5+ years specializing in high-loaded distributed cloud applications built with microservices.
                  </p>
                  <p >
                    🪄 My technical expertise spans from low-level wizzardry like <span className='p_acc'>C++</span> programming and <span className='p_acc'>embeded Rust</span> to hgier order magical concepts like <span className='p_acc'>lambda calculus</span> and <span className='p_acc'>type theory</span>.
                  </p>
                  <p >
                    🎓 <span className='p_acc'>Led</span> Unity & C# team of 4 developers for 3+ years, onboarded and mentored new developers.
                  </p>
                  {Math.random() > 0.5 && (
                    <p >
                      🍴 I've eaten a crab writing microservices.
                    </p>
                  )}
                  <p >
                    ✨ For more information, please refer to my <a className='a p_acc' href={consts.DOWNLOAD_PDF_RESUME}>resume</a> or check my <a className='a p_acc' href={consts.SOCIALS_LINKEDIN}>LinkedIn</a> profile.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >


      <section id={consts.DESCRIPTION} className='flex flex-row w-full h-fit justify-center py-6'>
        <p className='w-[90%] md:w-1/2 text-center opacity-70'>
          The website was made by me on a weekend using React, TailwindCSS, TypeScript, Vite, and Three.js.
        </p>
      </section>


      <section id={consts.BACKGROUND_MAZE} className='z-[-10000000] fixed inset-0 bg-gray-900'>
        {/* <three.CanvasWithShaderedMaze /> */}
      </section>


    </>
  )
}


