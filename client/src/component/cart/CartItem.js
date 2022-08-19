import { useDispatch } from "react-redux";
import axios from "axios";
import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} from "../redux/reducers/cart";
import { useState , useEffect} from "react";
import { Link, useParams } from "react-router-dom";
//import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const {quantity } = props;
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:5000/product/show-produit/${id}`
    );
    //console.log(result);
    setProduct(result.data);
    
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={product.Image} />
      </div>
      <div className="product-title">
        <h2>{product.Title}</h2>
        <h2 className="product-price">${product.Prix}</h2>
        <button onClick={() => dispatch(removeFromCart(product))}>
          Remove from cart
        </button>
      </div>
      <div className="quantity">
        <button onClick={() => dispatch(subtractItemQuantity(props))}></button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(addItemQuantity(product))}></button>
      </div>
    </div>
  );
};

export default CartItem;
