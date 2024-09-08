import React, { PropsWithChildren } from 'react'

interface Swiper extends PropsWithChildren {}
const Swiper = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const { children } = props
  return (
    <React.Fragment>
      <div ref={ref}>
        {children}
      </div>
    </React.Fragment>
  )
})

Swiper.displayName = "Swiper"
export default React.memo(Swiper)