import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  const handleAddToCart = () => setQuantity((prev) => prev + 1);
  const handleRemoveOne = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };
  const handleResetCart = () => setQuantity(0);
  const handleToggleProduct = () => setShowProduct((prev) => !prev);

  return (
    <div className="app-container">
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "30px",
          opacity: 0.3,
          fontSize: "20px",
          fontWeight: "bold",
          color: "#000",
          pointerEvents: "none",
          zIndex: 9999,
          userSelect: "none",
        }}
      >
        Made by Dawood
      </div>
      <Header />

      <div className="tab-title-bar">
        Tab title{" "}
        <strong>
          {productName} | {selectedColor} | Cart: {quantity}
        </strong>
      </div>

      <main className="main-content">
        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}

        <div className="controls-section">
          <div className="controls">
            <div className="control-group">
              <label>Product colour</label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
              </select>
            </div>
            <div className="control-group">
              <label>Delivery city</label>
              <input
                type="text"
                value={deliveryCity}
                onChange={(e) => setDeliveryCity(e.target.value)}
              />
            </div>
          </div>

          <div className="buttons">
            <button className="btn-add" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className="btn-remove"
              onClick={handleRemoveOne}
              disabled={quantity === 0}
            >
              Remove One
            </button>
            <button className="btn-reset" onClick={handleResetCart}>
              Reset Cart
            </button>
            <button className="btn-hide" onClick={handleToggleProduct}>
              {showProduct ? "Hide Product" : "Show Product"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
