import React from 'react'

function Button(props) {
  return (
    <button className='bg-[#111b53] py-2 px-4 border-[1px] rounded-xl text-white opacity-[0.8]'>
        {props.value}
    </button>
  )
}

export default Button