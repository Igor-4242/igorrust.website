import './styles.css'
import * as circles from './circles';
import * as consts from './consts';
import * as three from './three';


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
          <circles.Circles amount={10} radiusBase={200} radiusMax={800} />
        </div>

        <div className='md:hidden flex h-[60px]'></div>

        <div className='flex flex-col w-full justify-center items-center gap-[28px]'>
          <div className='flex flex-col w-[90%] max-w-[550px] min-w-[0px] md:min-w-[440px] justify-center items-center gap-[28px]'>


            <div className='flex flex-col w-full gap-[6px]'>
              <a href={consts.SOCIALS_LINKEDIN}>
                <h1 className='text-[48px] font-extrabold'>Igor Boiko</h1>
              </a>
              <h1 className='text-[38px] text-left text-yellow-600'>C/C++ & Rust</h1>
              <h1 className='text-[38px] text-right text-yellow-600'>Developer & Teamlead</h1>
            </div>

            <div className='flex flex-col w-full gap-[6px]'>
              {/* <h2>About</h2> */}
              <div className='flex flex-col justify-center items-center'>
                <div className='w-[80%] flex flex-col gap-2'>
                  <p className='bg-gray-900/80 p-2'>
                    🪐 I'm a primarily <span className='p_acc'>System-level Backend</span> developer for 5+ years already. Yet on variety of projects also took frontend and leading roles.
                  </p>
                  {/* <p className='bg-gray-900/80 p-2'>
                    🪄 My technical expertise spans from low-level wizzardry like <span className='p_acc'>C/C++</span> programming and <span className='p_acc'>embedded Rust</span> to hgier order magical concepts like <span className='p_acc'>lambda calculus</span> and <span className='p_acc'>type theory</span>.
                  </p> */}
                  <p className='bg-gray-900/80 p-2'>
                    🪄 Depending on project specification I did lots of <span className='p_acc'>embedded Rust</span>, <span className='p_acc'>Python</span> and ffi bindings for it, <span className='p_acc'>TypeScript</span> and web frontend, <span className='p_acc'>GLSL</span> and <span className='p_acc'>GPU computing</span>, <span className='p_acc'>C#</span> for <span className='p_acc'>Unity</span>, <span className='p_acc'>CI/CD</span> pipelines.
                  </p>
                  <p className='bg-gray-900/80 p-2'>
                    🎓 <span className='p_acc'>Led</span> as a <span className='p_acc'>tech lead</span> multiple small teams (3-5 members) on variety of projects (4 total), did onboarding / code review / mentorship for new developers.
                  </p>
                  {/* <p className='bg-gray-900/80 p-2'>
                    ✨ For more information, please refer to my <a className='a p_acc' href={consts.DOWNLOAD_PDF_RESUME}>resume</a> or check my <a className='a p_acc' href={consts.SOCIALS_LINKEDIN}>LinkedIn</a> profile.
                  </p> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >


      <section id={consts.DESCRIPTION} className='flex flex-row w-full h-fit justify-center py-6'>
        <p className='w-[90%] md:w-1/2 text-center opacity-70'>
          This website was built by me over a weekend using React (no hooks btw), TailwindCSS, TypeScript, Vite, and Three.js with GLSL.
        </p>
      </section>


      <section id={consts.BACKGROUND_MAZE} className='z-[-10000000] fixed inset-0 bg-gray-900'>
        {/* I can only hope that website runs on your device well enought 😉 */}
        <three.CanvasWithShaderedWaves />
      </section>


    </>
  )
}


