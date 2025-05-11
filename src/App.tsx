import { useState } from 'react'
import './styles.css'

export default function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex flex-row justify-center gap-[42px] py-12">
        <a href="">
          Quaein
        </a>
        <a href="">
          Quaein
        </a>
        <a href="">
          Quaein
        </a>
        <a href="">
          Quaein
        </a>
      </section>

      <section className='flex flex-row'>

        <div>
          <div className='h-[200px] w-[200px] bg-red-600 rounded-full' />
        </div>

        <div>

          {/* Igor */}
          <div className='flex flex-col'>
            <h1>Igor Boiko</h1>
            <h1 className='text-right'>Rust Dev</h1>
          </div>

          {/* About */}
          <div className='flex flex-col'>
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
          <div className='flex flex-col'>
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

      <section className='flex flex-row justify-center py-12'>
        <p className='w-full  sm:w-1/2 text-center'>
          Quaead dolor vero libero alias quam? Velculpa dolores, quo iusto et sunt. Quaein lorem, unde totam odit, sed. Eveniettotam modi qui, ipsam, modi, tempore!
        </p>
      </section>

    </>
  )
}

