import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='container mx-auto'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<ShoppingCart />}/>
      </Routes>
    </div>
  )
}

export default App