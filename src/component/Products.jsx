import React, { useState } from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Cricket Bat",
      price: "₹2,999",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.6dnMy9RaN-iu8M4H5KPoAQHaNJ?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      name: "Cricket Ball",
      price: "₹499",
      image:
        "https://media.istockphoto.com/vectors/cricket-ball-vector-id455461919?k=6&m=455461919&s=612x612&w=0&h=cbjihRtZjthEsmqI5UXLD54oPSpomjbIHmX2RTaTOkk=",
    },
    {
      id: 3,
      name: "Batting Gloves",
      price: "₹899",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.6dnMy9RaN-iu8M4H5KPoAQHaNJ?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 4,
      name: "Helmet",
      price: "₹1,499",
      image:
        "https://arena.cricketgraph.com/uploads/team-india-helmet-6-jpeg_1672055172.jpeg",
    },
  ];

  // 🛒 Cart State
  const [cart, setCart] = useState([]);

  const handleBuy = (product) => {
    setCart([...cart, product]);
  };

  // ❌ Remove from cart
  const handleRemove = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    padding: "40px 20px",
    textAlign: "center",
    color: "#fff",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1605702128851-d2b6b3f6e2f5')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(8px)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "650px",
    margin: "auto",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    backgroundColor: "rgba(255,255,255,0.1)",
    margin: "12px 0",
    padding: "12px",
    borderRadius: "10px",
    boxShadow: "0 0 10px cyan",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <div style={contentStyle}>
        <h2 style={{ textShadow: "0 0 15px cyan" }}>Our Products</h2>

        {/* 🛒 Cart Count */}
        <p>
          🛒 Cart Items: <strong>{cart.length}</strong>
        </p>

        {/* PRODUCTS */}
        {products.map((product) => (
          <div key={product.id} style={itemStyle}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: 70, borderRadius: 6 }}
            />

            <div style={{ flex: 1, textAlign: "left" }}>
              <strong>{product.name}</strong>
              <div>{product.price}</div>
            </div>

            <button onClick={() => handleBuy(product)} style={btnStyle}>
              Buy
            </button>
          </div>
        ))}

        {/* CART ITEMS */}
        {cart.length > 0 && (
          <>
            <h3 style={{ marginTop: 30 }}>Cart Items</h3>

            {cart.map((item, index) => (
              <div key={index} style={itemStyle}>
                <span>{item.name}</span>
                <button
                  onClick={() => handleRemove(index)}
                  style={removeBtnStyle}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "8px 16px",
  background: "cyan",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

const removeBtnStyle = {
  padding: "6px 12px",
  background: "red",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Products;
