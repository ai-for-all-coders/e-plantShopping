import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, deleteItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(addToCart(item));
  const handleDecrement = () => dispatch(removeFromCart(item.id));

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Unit Price: ₹{item.price}</p>
      <p>Total Cost: ₹{item.price * item.quantity}</p>

      <button onClick={handleDecrement}>-</button>
      <span>{item.quantity}</span>
      <button onClick={handleIncrement}>+</button>

      <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>

      <br />

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

      <button onClick={() => alert("Checkout Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}
