import React from 'react'

const CartItems = ({cartItems,handleCart,handleRemoveCart}) => {
   

    const itemCost = Math.floor(cartItems.price) * cartItems.quantity;
    let cost = Math.floor(itemCost);


   
     
  
  return (
    <div className='bg-gray-100 mb-4 flex p-7'>
      <div >
        <img className='h-[80px]'  src={cartItems.image}/>
      </div>
      <div className='flex flex-col'>
         <div className='font-bold mx-2'>
        {cartItems.title}
         </div>
         <div className='flex  mx-2 gap-12'>
          <p>${cost}</p>
          <div className='flex'>
           <button 
           onClick={()=>handleRemoveCart(cartItems)}
           className='bg-slate-400 hover:bg-slate-500 text-center font-bold px-2 rounded-md mr-2 '>-</button>
           <p>{cartItems.quantity}</p>
           <button
            onClick={()=>handleCart(cartItems)}
           className='bg-slate-400 hover:bg-slate-500 px-2 text-center font-bold rounded-md ml-2'>+</button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default CartItems

