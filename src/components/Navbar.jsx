import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React from 'react'
import PopoverCart from './PopoverCart'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='sticky top-0 z-10 bg-white flex justify-between items-center px-10 py-4 border-b'>
        <span onClick={() => navigate('/')} className='cursor-pointer font-oregano text-3xl text-indigo-600 font-semibold'>Ecommerce</span>
        <div className='flex justify-center items-center gap-2'>
            <button>
                <HeartIcon className='w-6 text-indigo-600 hover:text-indigo-500' />
            </button>
            <PopoverCart />
        </div>
    </div>
  )
}

export default Navbar