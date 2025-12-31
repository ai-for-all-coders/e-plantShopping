import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const plantData = {
  "Medicinal Plants": [
    { id: 1, name: "Aloe Vera", price: 200, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Tulsi", price: 150, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Neem", price: 180, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Ashwagandha", price: 220, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Brahmi", price: 170, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Giloy", price: 190, image: "https://via.placeholder.com/100" }
  ],
  "Aromatic Plants": [
    { id: 7, name: "Lavender", price: 250, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Mint", price: 120, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Rosemary", price: 200, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Jasmine", price: 230, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Lemongrass", price: 160, image: "https://via.placeholder.com/100" },
    { id: 12, name: "Geranium", price: 210, image: "https://via.placeholder.com/100" }
  ],
  "Indoor Plants": [
    { id: 13, name: "Snake Plant", price: 300, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Peace Lily", price: 350, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Spider Plant", price: 280, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Money Plant", price: 200, image: "https://via.placeholder.com/100" },
    { id: 17, name: "ZZ Plant", price: 400, image: "https://via.placeholder.com/100" },
    { id: 18, name: "Rubber Plant", price: 370, image: "https://via.placeholder.com/100" }
  ]
};

export default function ProductList() {
  const dispatch = useDispatch();
  const cartQty = useSelector(state => state.cart.totalQuantity);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart ({cartQty})</Link>
      </nav>

      <h2>Our Plants</h2>

      {Object.entries(plantData).map(([category, plants]) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants.map(plant => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <p>{plant.name}</p>
              <p>₹{plant.price}</p>

              <button
                onClick={() => handleAdd(plant)}
                disabled={addedToCart[plant.name]}
              >
                {addedToCart[plant.name] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
