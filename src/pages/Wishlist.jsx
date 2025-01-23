import React from 'react'
import WishlistHeader from '../components/WishlistHeader'
import WishlistPagination from '../components/WishlistPagination'
import WishlistProductList from '../components/WishlistProductList'

const Wishlist = () => {
  return (
    <div>
        <WishlistHeader />
        <WishlistPagination />
        <WishlistProductList />
    </div>
  )
}

export default Wishlist