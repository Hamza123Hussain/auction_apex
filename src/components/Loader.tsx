import React from 'react'

const Loader = () => {
  return (
    /* From Uiverse.io by ArnavK-09 */
    <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-slate-900 via-blue-900 to-red-900 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
      <div className="rounded-full h-full w-full 0 bg-zinc-900 background-blur-md"></div>
    </div>
  )
}

export default Loader
