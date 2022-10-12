import React from 'react'
import Announce from '../Components/Announce';
import Footer from '../Components/Footer';
import Navbaar from '../Components/Navbaar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import Home from './Home';

function CategoryPage() {
  return (
    <div>
  <Announce/>
  <Navbaar/>
  <div className='flex flex-col p-5'>
    <h1 className='text-[30px]'>Men's Cloth</h1>
    <div className='flex justify-between items-center mt-3'>
        <div className='flex'>
            <p>Filter By</p>
            <select className=' ml-3 border-2 border-silver' >
                <option selected disabled> Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
            <select className=' ml-3 border-2 border-silver' >
                <option selected disabled>Colour</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>blue</option>
            </select>
        </div>
        <div className='flex'>
            <p>
                Sort By
            </p>
            <select className=' ml-3 border-2 border-silver'>
                <option>Newest (first)</option>
                <option>Oldest (first)</option>
                <option>Price (Asc)</option>
                <option>Price (Dec)</option>
            </select>
        </div>
    </div>
  </div>
  <Products/>
  <Newsletter/>
  <Footer/>

    </div>
  )
}

export default CategoryPage;