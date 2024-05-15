import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="flex items-center flex-col">
    <div className="mx-auto max-w-screen-xl px-4 py-12 ">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold">
          Manage your expenses
          <strong className="mt-2 font-extrabold text-primary sm:block"> Control your Money </strong>
        </h1>
  
        <p className="mt-4 text-2xl/relaxed font-bold">
         Start Creating your budget and save money
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            className="block w-full rounded border bg-primary px-32 py-1 text-lg font-bold text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
          >
            <Link href={'/sign-in'}>Get Started now</Link>
           
          </Button>
  

        </div>
      </div>
     
    </div>

    <Image src={'/dashboard.png'} alt="hero" width={1000} height={700} className='mt-2 mb-12 border-2  rounded-xl'/>
  </section>
  )
}

export default Hero