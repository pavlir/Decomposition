import React from 'react'

export const Addition : React.FC<{ text: string }> = ({text}) => {
  return (
    <div className='addition'>{text}</div>
  )
}
