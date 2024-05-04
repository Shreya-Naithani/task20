import React,{useState,useEffect} from 'react';
import CartItems from './CartItems';

const Cart = ({addToCart,handleCart,handleRemoveCart}) => {
    
 const[cartItems ,setCartItems] =useState([])

 useEffect(() => {
  setCartItems(addToCart)
  }, [addToCart]);

 
 
    
  

    const total = cartItems.reduce((acc,item)=>{
        const itemTotal = (Math.floor(item.price)) * item.quantity;
        return  acc + itemTotal
    }, 0);
  return (
    <div className='bg-gray-200 p-10 w-[33vw] max-h-[80vh] fixed overflow-y-scroll'>
        <p className='text-xl font-bold'>Cart</p>
      {
        cartItems.length >0 ? (
            cartItems.map((cartItems)=>(
                <CartItems  key={cartItems.id} cartItems={cartItems} handleCart={handleCart} handleRemoveCart={handleRemoveCart} />
            ))
        ):(
            <div className='flex justify-center items-center font-bold text-xl'> Total $0.0 </div>
        )
      }
      <div>
      {
        total >0 && <p className='font-bold text-center text-xl'>Total: ${total}</p>
      }
      </div>
      
    </div>
  )
}

export default Cart
