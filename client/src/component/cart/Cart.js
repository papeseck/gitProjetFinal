import { useSelector } from "react-redux";
import "../styles/cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );

  if (quantity === 0) {
    return (
      <div>
        <h2 className="no-items">No items in cart...</h2>
        <h3 className="" style={{color:"red" , textAlign:'center'}}>Browse our<a href="/"> categories</a> and discover our best produts! </h3>
      </div>
    );
  }

  return (
    <div className="Cart container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        {<CartItem />}
      </div>
      <h2 className="total">Total Amount: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
