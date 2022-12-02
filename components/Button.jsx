import React from 'react'

function Button(props) {
  return (
    <button className='bg-[#FF595A] py-4 px-8 text-[#001233] opacity-[0.8] font-bold'>
        {props.value}
    </button>
  )
}

export default Button