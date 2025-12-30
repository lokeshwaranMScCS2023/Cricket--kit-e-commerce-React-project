import React, { useState } from "react";

function Home() {
  // 🧠 State to store click data
  const [clicked, setClicked] = useState(false);

  const handleShopNow = () => {
    setClicked(true);
    console.log("Shop Now button clicked");
  };

  const containerStyle = {
    textAlign: "center",
    padding: "80px 20px",
    backgroundImage:
      "url('https://tse4.mm.bing.net/th/id/OIP.7-J7BRRrwr43W1uA11uXdgHaFi?rs=1&pid=ImgDetMain&o=7&rm=3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    width: "100vw",
    height: "100vh",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(10, 10, 50, 0.6)",
    backdropFilter: "blur(8px)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 auto",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#fff",
  };

  const buttonStyle = {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#00f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 10px #00f, 0 0 20px #0ff",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <div style={contentStyle}>
        <h1>Welcome to Cricket Kit Store</h1>
        <p>Buy quality cricket bats, balls, gloves & pads.</p>

        <button style={buttonStyle} onClick={handleShopNow}>
          Shop Now
        </button>

        {/* ✅ Data shown after click */}
        {clicked && (
          <p style={{ marginTop: "20px", color: "cyan" }}>
            🛒 Thanks for your interest! Explore our products below.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
