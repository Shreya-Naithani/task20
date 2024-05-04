
import CartItem from './CartItem'

const Main = ({items,handleCart}) => {

console.log(items);
  return (
    <div>
    {items.length > 0 ? (
      <div className="grid grid-cols-2 ">
        {items.map((cart) => (
          <CartItem
            key={cart.id}
           cart={cart}
           handleCart={handleCart}
           
          />
        ))}
      </div>
    ) : (
      <div>No items found</div>
    )}
  </div>
  );
}

export default Main
