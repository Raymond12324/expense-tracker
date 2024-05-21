import React from 'react'


function layout({children}) {
  return (
    <>  
    <h2 class="font-bold text-3xl p-5">My Budgets</h2>
    {children}
    </>
       
   
  )
}

export default layout