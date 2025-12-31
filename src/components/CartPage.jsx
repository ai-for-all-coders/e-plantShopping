import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ₹{totalAmount}</p>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-actions">
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button>Checkout</button>
      </div>
    </div>
  );
}
