import React from 'react'
import { Link } from 'react-router-dom'

const ProductPages = ({id,shoe,price}) => {
  return (
    <div>
<Link to={`/product/:product-${id}/checkout`}>

    <div>
        <h2>{shoe}</h2>
        <h2>{price}</h2>
    </div>

</Link>



    </div>
  )
}

export default ProductPages