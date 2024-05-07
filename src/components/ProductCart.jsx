import React from 'react'

const ProductCart = ({product}) => {


  const {Image, Title ,  Status} = product


  return (
    <div class="card d-flex m-2 " >
    <img  className="p-3" src={` https://ik.imagekit.io/dev24/${Image}`} alt="" />
    <div class="card-body">
      <h5 class="card-title text-light">{Title}</h5>
      <a href="#" class="aa btn btn-light text-center w-100">{Status}</a>
    </div>
  </div>
  )
}

export default ProductCart

