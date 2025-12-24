import React from "react";

function Home() {
  const containerStyle = {
    textAlign: "center",
    padding: "40px 20px",
  };

  const titleStyle = {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#222",
  };

  const textStyle = {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  };

  const imageStyle = {
    width: "60%",
    height:"50%",
   
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Cricket Kit Store</h1>
      <p style={textStyle}>
        Buy quality cricket bats, balls, gloves & pads.
      </p>
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.7-J7BRRrwr43W1uA11uXdgHaFi?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Cricket Kit"
        style={imageStyle}
      />
    </div>
  );
}

export default Home;
