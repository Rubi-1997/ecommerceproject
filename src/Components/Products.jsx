import React from 'react'
import {ApiTopPropduct} from '../ApiFolder/TopProfductsApi'
import Product from './Product'

function Products() {
    // console.log(ApiTopPropduct)
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
     {
         ApiTopPropduct.map((product,index)=>{
            return <Product item={product} key={index}/>
         })
     }
    </div>
  )
}

export default Products