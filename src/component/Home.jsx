import React from "react";

function Home() {
  const containerStyle = {
    textAlign: "center",
    padding: "80px 20px",
    backgroundImage:
      "url('https://tse4.mm.bing.net/th/id/OIP.7-J7BRRrwr43W1uA11uXdgHaFi?rs=1&pid=ImgDetMain&o=7&rm=3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "#2016e3ff", // font color
    width: "100vw",
    height: "100vh",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(10, 10, 50, 0.6)", // dark blue overlay with transparency
    backdropFilter: "blur(8px)", // blur effect
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 auto",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#c41010ff", // font color inside content
  };

  const titleStyle = {
    fontSize: "36px",
    marginBottom: "15px",
    textShadow: "0 0 15px #00f, 0 0 30px #0ff", // glowing text
  };

  const textStyle = {
    fontSize: "20px",
    marginBottom: "30px",
    textShadow: "0 0 5px #fff",
  };

  const buttonStyle = {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#00f",
    color: "#ca1414ff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 10px #00f, 0 0 20px #0ff",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    boxShadow: "0 0 20px #00f, 0 0 40px #0ff",
    transform: "scale(1.05)",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Welcome to Cricket Kit Store</h1>
        <p style={textStyle}>Buy quality cricket bats, balls, gloves & pads.</p>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;
