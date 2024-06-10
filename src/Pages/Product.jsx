import React, { useState } from 'react'
import "../Styling/Product.css"
import ProductItems from '../Component/ProductItems'

const Product = () => {
const [data,setData]= useState(ProductItems)  
    return (

    <div className='items_container'>
        {data.map((val,key)=>{
            return(
                <div key={key} className='items'>
                    <h2>{val.id}</h2>
                    <h2>{val.price}</h2>
                    <h2>{val.shoe}</h2>
                </div>
        
            )


            })}
       
      
       

       
    </div>

    )}

export default Product