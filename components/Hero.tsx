import Image from 'next/image'
import Button from './Button'
import { Typewriter,TypewriterEffectSmooth } from './Typewriter'
import { text } from 'stream/consumers'


const Hero = () => {
  return (
    <section className="padding-container max-container flex gap-20 py-5 pb-10 md:gap-28 lg:py-5 xl:flex-row">
        <div className="mx-auto max-w-7xl flex">
            <div className="grid items-center grid-cols-1  lg:grid-cols-2 z-10">
                <div>
                    {/* <p className="text-base font-semibold tracking-wider text-green-600 uppercase">GET GUIDANCE FROM INDUSTRY EXPERTS</p> */}
                    <h1 className="mt-4 text-4xl font-bold text-green-600 lg:mt-8 sm:text-6xl xl:text-8xl">Master Software Engineering</h1>
                    <p className="mt-2 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>
                     
                  </div>
            </div>
            <div className='w-11/12 lg:w-screen overflow-hidden z-0'>
              <img src={"/hero-1.jpg"} alt='person'/>
            </div>
        </div>
    </section>
  )
}

export default Hero