import React from 'react'

export default function Button({text,show}) {
  return (
    <button className='btn' onClick={()=>{show(text)}}>{text}</button>
  )
}
