import React from 'react'

type Props = {
    text: string
}

const HeaderText = ({ text }: Props) => {
  return (
    <div className="text-2xl font-bold">
        {text}
    </div>
  )
}

export default HeaderText