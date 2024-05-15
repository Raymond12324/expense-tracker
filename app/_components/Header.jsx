import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5  flex justify-between items-center border shadow'>
        <Image src={'/logo.svg'} alt="logo" width={160} height={100}/>
        <Button className="font-bold"> <Link href={'/sign-in'}>Get Started</Link> </Button>
    </div>
  )
}

export default Header