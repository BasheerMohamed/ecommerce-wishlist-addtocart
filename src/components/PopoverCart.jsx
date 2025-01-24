import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useSelector } from 'react-redux'
import { selectCart, selectCartCount } from '../Redux/slice'
import { useNavigate } from 'react-router-dom'

const PopoverCart = () => {

  const cartCount = useSelector(selectCartCount);
  const carts = useSelector(selectCart);
  const navigate = useNavigate();

  return (
    <Popover className="flow-root text-sm lg:relative">
      <PopoverButton className="relative group focus:border-none focus:outline-none flex items-center">
        <ShoppingBagIcon
          aria-hidden="true"
          className="size-6 shrink-0 text-indigo-600 hover:text-indigo-500"
        />
        <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center font-medium">{cartCount}</span>
      </PopoverButton>
      {cartCount > 0 && <PopoverPanel
        transition
        className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:px-2 lg:top-full lg:right-0 lg:left-auto lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black/5"
      >
        <h2 className="sr-only">Shopping Cart</h2>

        <form className="mx-auto max-w-2xl px-4">
          <ul role="list" className="divide-y divide-gray-200">
            {carts.slice(0, 5).map((cart) => (
              <li key={cart.id} className="flex items-center py-6">
                <img
                  alt={cart.imageAlt}
                  src={cart.imageSrc}
                  className="size-16 flex-none rounded-md border border-gray-200"
                />
                <div className="ml-4 flex-auto">
                  <h3 className="font-medium text-gray-900">
                    <a href={cart.href}>{cart.name}</a>
                  </h3>
                  <p className="text-gray-500">{cart.color}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className='pb-4 text-gray-500'>
            <p className='pb-1.5'>You can view up to 5 products here.</p>
            <p>Click the button below to view all your products in the shopping bag.</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
            onClick={() => navigate('/cart')}
          >
            View Shopping Bag
          </button>
        </form>
      </PopoverPanel>}
    </Popover>
  )
}

export default PopoverCart