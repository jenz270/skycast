import React from 'react'

type Props = {
    width?: string
}

const Separator = ({ width = 'w-full'}: Props) => {
  return (
     <div className={`h-px ${width} bg-black my-4`} />
  )
}

export default Separator