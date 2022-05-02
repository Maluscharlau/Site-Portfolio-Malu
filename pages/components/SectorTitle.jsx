import React from 'react'

function SectorTitle({title}) {
  return (
    <div className="w-full bg-headerColor flex justify-center p-10 mt-10">
      <h2 className="text-base sm:text-4xl font-bold tracking-[.5em] hover:scale-150 transition-all ease-in duration-300 fontIBM ">{title}</h2>
    </div>
  )
}

export default SectorTitle
