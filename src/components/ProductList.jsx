import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", category: "Medicinal Plants", price: 250 },
  { id: 2, name: "Tulsi", category: "Medicinal Plants", price: 200 },
  { id: 3, name: "Lavender", category: "Aromatic Plants", price: 300 },
  { id: 4, name: "Mint", category: "Aromatic Plants", price: 150 },
  { id: 5, name: "Snake Plant", category: "Indoor Plants", price: 400 },
  { id: 6, name: "Peace Lily", category: "Indoor Plants", price: 450 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h2>Our Plants</h2>

      {plants.map(plant => (
        <div className="product-card" key={plant.id}>
          <h3>{plant.name}</h3>
          <p>Category: {plant.category}</p>
          <p>Price: ₹{plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
