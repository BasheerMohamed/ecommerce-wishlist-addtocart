import React from 'react'

const WishlistHeader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 py-24 border-b bg-gray-50'>
        <p className='font-bold text-4xl text-gray-800'>Wishlist</p>
        <p className='text-gray-500 text-lg font-light text-center px-5'>Your handpicked favorites, thoughtfully curated for your workspace, home, and beyond.</p>
    </div>
  )
}

export default WishlistHeader