import { LayoutGrid, PiggyBank, Receipt, Shield,Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function sideNav() {

    const links = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: LayoutGrid
        },
        {
            name: 'Budget',
            href: '/dashboard/budget',
            icon: PiggyBank
        },
        {
            name: 'Expenses',
            href: '/dashboard/expenses',
            icon: Receipt
        },
        {
            name: 'Upgrade',
            href: '/dashboard/categories',
            icon: Shield
        },
        // {
        //     name: 'Reports',
        //     href: '/dashboard/reports',
        //     icon: 'reports'
        // }
    ]

  return (
        <div className='h-screen border shadow-sm '>
            <div className='mb-5 p-5 border-b-4 border-[#1ec67821]'>
            <Image src='/logo.svg' alt='logo' width={160} height={100}/>   
            </div>
                

            {links.map((link, index) => (
               <h2 className='flex gap-2  text-gray-600 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-[#1ec67821] hover:font-semibold'>
                <link.icon/>
                {link.name}
               </h2>
            ))}
         
        </div>
  )
}

export default sideNav