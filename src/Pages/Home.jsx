import React from 'react'
import Announce from '../Components/Announce'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbaar from '../Components/Navbaar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
        <Announce/>
        <Navbaar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home