import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 py-24 border-b bg-gray-50'>
        <p className='font-bold text-4xl text-gray-800'>New Arrivals</p>
        <p className='text-gray-500 text-lg font-light text-center px-5'>Thoughtfully designed objects for the workspace, home, and travel.</p>
    </div>
  )
}

export default Header