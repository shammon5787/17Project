import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CartSlice';

const Cart = () => {
  const disp = useSelector((state)=>state.cart)
  const Remo = useDispatch();

  const removeHandler = (productid)=>{
    Remo(remove(productid))
  }


  return (
    <div>
      <div className='wrapprod'>
            {
                disp.map((product) => (
                    <div key={product.id} className='cards'>
                        <div style={{width:'80px'}}>
                            <img  className='imag' src={product.image} alt="" />
                        </div>
                        <div>
                            <h4>{product.title}</h4>
                            <h4>$: {product.price}</h4>
                        <button className='btn' style={{backgroundColor:'gray'}} onClick={()=>removeHandler(product.id)}>Remove Cart</button>
                        </div>
                    </div>
                ))
            }
            </div>
    </div>
  )
}

export default Cart
