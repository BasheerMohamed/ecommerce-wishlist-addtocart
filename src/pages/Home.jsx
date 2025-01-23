import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <div>
      <Header />
      <Pagination />
      <ProductList />
    </div>
  )
}

export default Home