import { useEffect } from "react";

function ProductCard({ productName, price, quantity, selectedColor, deliveryCity }) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = originalTitle;
    };
  }, [productName, selectedColor, quantity]);

  const totalAmount = quantity * price;

  const colorHexMap = {
    Black: "#232527",
    Blue: "#275e9b",
    White: "#ffffff"
  };
  const fillColor = colorHexMap[selectedColor] || "#232527";

  return (
    <div className="product-card">
      <div className="product-image" style={{ position: 'relative' }}>
        <div style={{
          textAlign : 'center',
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          opacity: 0.15,
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#000',
          pointerEvents: 'none',
          userSelect: 'none',
          transform: 'rotate(0deg)',
          whiteSpace: 'nowrap'
        }}>
          Made by Dawood
        </div>
        <svg width="100" height="160" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="140" rx="40" fill={fillColor} stroke="#ccc" strokeWidth="2" style={{ transition: "fill 0.3s ease" }} />
          <rect x="46" y="30" width="8" height="24" rx="4" fill="#999" />
          <path d="M 50 10 L 50 60" stroke="#ccc" strokeWidth="2" />
        </svg>
      </div>
      <div className="product-details">
        <h2 className="product-name">{productName}</h2>
        <p className="product-price">
          <span className="price-value">₹{price}</span> 
          <span className="price-unit">per item</span>
        </p>
        
        <div className="product-meta">
          <p>Colour: <strong>{selectedColor}</strong></p>
          <p>Deliver to: <strong>{deliveryCity}</strong></p>
        </div>
        
        <hr />
        
        <div className="cart-info">
          <p className="cart-quantity">Cart Quantity: <strong>{quantity}</strong></p>
          <p className="total-amount">Total Amount: <span>₹{totalAmount}</span></p>
          <p className="cart-status">{quantity === 0 ? "Cart is empty" : "Product added to cart"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
