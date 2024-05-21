import React from 'react'


function layout({children}) {
  return (
   <div className='p-10'>
    <h2 class="font-bold text-3xl ">My Budgets</h2>
    {children}
      </div>  
   

       
   
  )
}

export default layout