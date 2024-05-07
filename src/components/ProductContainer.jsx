import React, { useContext, useEffect } from 'react'
import ProductCart from './ProductCart'
import ProductContext from '../assets/Context/ProductContext'
import { getProducts } from '../assets/Context/ProductAction'

const ProductContainer = () => {

    const {products , dispatch} = useContext(ProductContext)

    const fetchProducts = async () => {
        const data = await getProducts()
        dispatch({
            type : "GET_PRODUCTS",
            payload : data
        })
    }

    useEffect (() => {
        fetchProducts()
    },[])

  return (
    <div className='aaa container-fluid d-flex justify-content-around flex-wrap p-5  g-3'>
        {
            products.map(product =><ProductCart  key={product.id} product={product}/>)

        }
    </div>
  )
}

export default ProductContainer
