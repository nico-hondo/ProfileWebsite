import React from 'react'
import Product from './Product';
import {products} from '../../data-img'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h4 className="pl-title">Member Of Web Programming UNPAS</h4>
            <div className="pl-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure modi consequatur similique. 
            </div>
        </div>
        <div className="pl-list mt-2">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList