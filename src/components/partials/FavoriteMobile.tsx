import React from 'react'

const FavoriteMobile = () => {
  return (
    <React.Fragment>
      <div className='h-[119px] w-full flex items-center justify-center px-[12px]'>
        <div className='h-[98px] w-full rounded-[40px] overflow-hidden bg-white/10 backdrop-blur-3xl'>
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(FavoriteMobile)