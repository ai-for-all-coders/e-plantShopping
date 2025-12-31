import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartPage() {
  const { items, totalAmount } = useSelector(state => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Cart Amount: ₹{totalAmount}</p>

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
