// import Image from 'next/image';
"use client"

import { useEffect, useState } from 'react';
import Allproducts from './Allproducts'

const Mainbar = () => {
const [products,setProducts]=useState([]);
useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])
    return (
        <div className=''>
            

            <div className="grid grid-cols-4 gap-5">
                {
                    products.map(product => <Allproducts
                        key={product.id}
                        product={product}
                        // handleAddToCart={handleAddToCart}
                    ></Allproducts>)
                }
            </div>
            
        </div>
    );
};

export default Mainbar;