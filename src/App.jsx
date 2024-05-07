import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductContainer from './components/ProductContainer'
import { ProductProvider } from './assets/Context/ProductContext'

const App = () => {
  return (
    <ProductProvider>
    <Navbar/>
    <HeroSection/>
    <ProductContainer/>
      
    </ProductProvider>
  )
}

export default App
