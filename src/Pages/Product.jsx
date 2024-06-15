import React, { useState } from 'react'
import "../Styling/Product.css"
import img2 from "../assets/Feetimage.jpeg"
import ProductPages from './ProductPages'
import ProductItems from "../Component/ProductItems"

const Product = () => {
    const [data, setData] = useState(ProductItems);
    
    return (
      <div className='items_container'>
        <h1 className='product-text'>Product List</h1>
        <ul className='items'>
          {data.map((val, key) => (
            <ProductPages key={key} id={val.id} shoe={val.shoe} price={val.price}/>
          ))}
        </ul>

    

    
      </div>
    );
  }
















// const Product = () => {
// const [data,setData]= useState(ProductItems)  
//     return (

//     <div className ='items_container'>
//         {data.map((val,key)=>{
//            return(
     
    
       
//                 <div key={key} className='items'>   

//               <Link to={`/product/:product-${id}/checkout`}> 
//               <div>
//                    <h2>{val.id}</h2>  
//                     <h2>{val.price}</h2>
//                     <h2>{val.shoe}</h2>
                    
//                 </div>
//            </Link> 
         
//             </div>  
 
//             )


//             })}
       
      
       

       
//     </div>

//     )}

export default Product