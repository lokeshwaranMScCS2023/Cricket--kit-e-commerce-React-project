import React from "react";

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

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    padding: "40px 20px",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1605702128851-d2b6b3f6e2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxjcmNrZXR8fHx8fHwxNjg4NDEyNjQ4&ixlib=rb-4.0.3&q=80&w=1080')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(8px)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "600px",
    margin: "0 auto",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: "30px 0",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: "10px 0",
    padding: "12px",
    borderRadius: "10px",
    boxShadow: "0 0 10px #00f, 0 0 20px #0ff",
    fontSize: "16px",
    color: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "6px",
    boxShadow: "0 0 8px #00f, 0 0 15px #0ff",
  };

  const itemHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 0 20px #00f, 0 0 40px #0ff",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={{ textShadow: "0 0 10px #00f, 0 0 20px #0ff" }}>Our Products</h2>
        <ul style={listStyle}>
          {products.map((product) => (
            <li
              key={product.id}
              style={itemStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, itemHoverStyle)
              }
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, itemStyle)}
            >
              <img src={product.image} alt={product.name} style={imageStyle} />
              <div>
                <strong>{product.name}</strong>
                <div>{product.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
