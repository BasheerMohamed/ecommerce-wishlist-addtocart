import React, { useState } from 'react'
import ProductQuickView from './ProductQuickView';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlist, selectWishlist, selectWishlistCount } from '../Redux/slice';
import { XMarkIcon } from '@heroicons/react/24/outline';

const WishlistProductList = () => {
    const [showProductView, setShowProductView] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const dispatch = useDispatch();
    const wishlist = useSelector(selectWishlist);
    const wishlistCount = useSelector(selectWishlistCount);

    const handleWishList = (product) => {
      dispatch(removeWishlist(product));
    }

      const handleShowProductView = (product) => {
        setSelectedProduct(product);
        setShowProductView(true);
      }

      const handleClose = () => {
        setShowProductView(false);
        setSelectedProduct(null);
      };

      return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">You have {wishlistCount} items in your wishlist.</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {wishlist.map((product) => (
                <div onClick={() => handleShowProductView(product)} key={product.id} className="group relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  </div>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    handleWishList(product);}} className='absolute flex items-center justify-center w-7 h-7 rounded bg-gray-800 top-5 left-5 cursor-pointer'>
                    <XMarkIcon stroke='white' strokeWidth={2} className='w-4' />  
                  </button>
                </div>
              ))}
            </div>
          </div>
          {showProductView && (<ProductQuickView product={selectedProduct} onClose={handleClose} />)}
        </div>
      )
}

export default WishlistProductList