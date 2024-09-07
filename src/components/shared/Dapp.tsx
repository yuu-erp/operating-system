import React from 'react'

export interface DappProps extends IDapp {}
const Dapp = React.forwardRef<HTMLDivElement, DappProps>((props, ref) => {
  const { name, logo } = props;
  return (
    <React.Fragment>
      <div ref={ref}>
        {name}
        {logo}
      </div>
    </React.Fragment>
  )
})

Dapp.displayName = "Dapp"
export default React.memo(Dapp)