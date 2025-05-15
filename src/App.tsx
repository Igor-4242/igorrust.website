// import * as three from './three';
import * as consts from './consts';
import * as circles from './circles';
import './styles.css'

export function App() {

  return (
    <>


      {/* <div className='bg-yellow-500 fixed top-0 left-0 right-0 flex flex-row items-center justify-center'>
        <p className='text-black bg-yellow-500'>
          website is under construction (wonky one is better than nothing)
        </p>
      </div> */}


      <section
        id={consts.HEAD_LINKS}
        className="flex flex-row justify-center w-full h-fit">
        <div className='sm:w-1/2 flex flex-row w-full h-fit justify-between gap-[42px] py-6'>
          <p className='opacity-50 text-center'>
            {/* website is under construction (wonky one is better than nothing) */}
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1cITpguyPT2mg9zmB_bBTwl70a07ZMMRJ"
          >
            Download Resume
          </a>
        </div>
      </section>


      <section
        id={consts.MAIN_INFO}
        className='flex flex-col w-full h-fit md:flex-row w-full max-w-[880px] gap-[5px] md:gap-[60px]'>

        <div className='flex flex-col w-full justify-center items-center p-[42px]'>
          <circles.Circles amount={10} radiusBase={200} radiusMax={1000} />
        </div>

        <div className='flex flex-col w-full gap-[28px]'>

          <div className='flex flex-col gap-[6px]'>
            <h1 className='text-[48px]'>Igor Boiko</h1>
            <h1 className='text-[38px] text-right text-blue-500'>Rust Teamlead & Developer</h1>
          </div>

          <div className='flex flex-col gap-[6px]'>
            <h2>About</h2>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-[90%] sm:w-[80%] flex flex-col gap-2'>
                <p >
                  I code for 5+ years straight. Primarly in <span className='text-blue-500'>Rust</span> for cloud software and high-load microservices, but also proficient in <span className='text-blue-500'>C# & Unity</span> as well as many other things actually like <span className='text-blue-500'>React</span>, <span className='text-blue-500'>Kubernets</span>, etc...
                </p>
                <p >
                  I have <span className='text-blue-500'>led</span> a team of four developers on a <span className='text-blue-500'>C# & Unity</span> project.
                </p>
                <p >
                  For more information, please refer to my resume or check my LinkedIn profile.
                </p>
              </div>
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
        <p className='w-[95%] sm:w-1/2 text-center opacity-70'>
          The website was made by me using React, TailwindCSS, TypeScript, Vite, and Three.js.
        </p>
      </section>


      <section id={consts.BACKGROUND_MAZE} className='z-[-10000000] fixed inset-0 bg-gray-900'>
        {/* <three.CanvasWithShaderedMaze /> */}
      </section>


    </>
  )
}


