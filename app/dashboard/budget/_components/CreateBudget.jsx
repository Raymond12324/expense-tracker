import React from 'react'

function CreateBudget() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"><div>
      <div className="bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed"><h2 className="text-3xl">+</h2><h2>Create New Budget</h2></div>
      </div>
     <div className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"></div>
     <div className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"></div>
     <div className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"></div>
     <div className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"></div>
     <div className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"></div>
     </div>
     
  )
}

export default CreateBudget