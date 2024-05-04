import React,{useState ,useEffect} from 'react';
import Cart from "./Component/Cart"
import Main from "./Component/Main"
import Navbar from "./Component/Navbar"


function App() {
 
  const API_URL ="https://fakestoreapi.com/products";
  const[items ,setItems] =useState([]);
  const[addToCart ,setAddToCart] =useState([]);


  async function fetchItem (){
      try {
          const res = await fetch(API_URL);
          const data =await res.json();
          const itemsWithQuantity = data.map((item) => ({ ...item, quantity: 1 }));
      setItems(itemsWithQuantity);
        
      } catch (error) {
          console.log(error);
      }
  }


  const handleCart = (selectedItem) => {
    const existingCartItem = addToCart.find((item) => item.id === selectedItem.id);

    if (existingCartItem) {
      // Item already exists in cart, update its quantity
      const updatedCart = addToCart.map((item) =>
        item.id === selectedItem.id ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 } : item
      );
      setAddToCart(updatedCart);
    } else {
      // Item is not in cart, add it with quantity 1
      setAddToCart([...addToCart, { ...selectedItem, quantity: 1 }]);
    }
  }
  
const handleRemoveCart=(selectedItem)=>{
       const existingCartItem =addToCart.find((item)=>item.id === selectedItem.id);
       if(existingCartItem.quantity ===1 ){
        setAddToCart(addToCart.filter((item)=>item.id !==existingCartItem.id))
       }
       else{
        setAddToCart(addToCart.map((item)=>item.id === selectedItem.id ?{...selectedItem ,quantity:selectedItem.quantity -1}: item))
       }
}

  useEffect(()=>{
    fetchItem();
},[])
  return (
    <div>
      <Navbar/>
      <div className="flex mx-[10rem] mt-[7rem]">
      <div className="h-screen w-[60%]">
        <Main items={items} handleCart={handleCart}/>
      </div>
      <div className="h-screen w-[40%]">
       <Cart addToCart={addToCart} handleCart={handleCart} handleRemoveCart={handleRemoveCart}/>
      </div>
      </div>
      
    </div>
  )
}

export default App
