import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>
        Paradise Nursery is your one-stop destination for premium indoor
        houseplants that bring life, freshness, and positivity to your home.
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
