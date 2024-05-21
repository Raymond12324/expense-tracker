import React from 'react'
import Sidenav from './_components/sideNav'

function layout({children}) {
  return (
    <>
    <div className='fixed w-64 border shadow'>
    <Sidenav/>
    </div>
    <div className='ml-64'>
    {children}
    </div>
    
    </>
       
   
  )
}

export default layout