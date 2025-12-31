import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, deleteItem } from "../redux/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Unit Price: ₹{item.price}</p>
      <p>Total: ₹{item.price * item.quantity}</p>

      <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(addToCart(item))}>+</button>

      <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
    </div>
  );
}
