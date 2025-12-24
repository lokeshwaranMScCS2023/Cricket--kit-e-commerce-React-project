import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Cricket Bat",
      price: "₹2,999",
      image: "https://tse1.mm.bing.net/th/id/OIP.6dnMy9RaN-iu8M4H5KPoAQHaNJ?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 2,
      name: "Cricket Ball",
      price: "₹499",
      image: "https://media.istockphoto.com/vectors/cricket-ball-vector-id455461919?k=6&m=455461919&s=612x612&w=0&h=cbjihRtZjthEsmqI5UXLD54oPSpomjbIHmX2RTaTOkk="
    },
    {
      id: 3,
      name: "Batting Gloves",
      price: "₹899",
      image: "https://tse1.mm.bing.net/th/id/OIP.6dnMy9RaN-iu8M4H5KPoAQHaNJ?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 4,
      name: "Helmet",
      price: "₹1,499",
      image: "https://arena.cricketgraph.com/uploads/team-india-helmet-6-jpeg_1672055172.jpeg"
    }
  ];

  const containerStyle = {
    padding: "30px",
    textAlign: "center",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    maxWidth: "500px",
    margin: "20px auto",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backgroundColor: "#f8f9fa",
    margin: "10px 0",
    padding: "12px",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    fontSize: "16px",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "6px",
  };

  return (
    <div style={containerStyle}>
      <h2>Our Products</h2>

      <ul style={listStyle}>
        {products.map((product) => (
          <li key={product.id} style={itemStyle}>
            <img
              src={product.image}
              alt={product.name}
              style={imageStyle}
            />
            <div>
              <strong>{product.name}</strong>
              <div>{product.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
