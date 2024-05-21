import React from 'react'
import Sidenav from './_components/sideNav'

function layout({children}) {
  return (
    <>
    <div className='fixed w-64 border shadow'>
    <Sidenav/>
    </div>
    <div className='mx-64 p-5'>
    {children}
    </div>
    
    </>
       
   
  )
}

export default layout