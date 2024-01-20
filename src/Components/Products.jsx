import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';

const Products = () => {

    const dispetch = useDispatch();
    const select = useSelector((state)=>state.cart)

    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProduct();

    }, []);

    const addHandler = (product)=>{
        dispetch(add(product))
    }
    return (
        <div className='wrapprod'>
            {
                Products.map((product) => (
                    <div key={product.id} className='cards'>
                        <div style={{width:'80px'}}>
                            <img  className='imag' src={product.image} alt="" />
                        </div>
                        <div>
                            <h4>{product.title}</h4>
                            <h4>$: {product.price}</h4>
                        <button className='btn' style={{backgroundColor:'gray'}} onClick={()=>addHandler(product)}>Add To Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
