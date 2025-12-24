import React from 'react';

function Reviews() {
  const reviews = [
    { id: 1, name: "Rahul", review: "Excellent quality bat!", image: "https://www.cricgram.com/wp-content/uploads/2019/08/KL-Rahul.jpg" },
    { id: 2, name: "Arjun", review: "Fast delivery and good service.", image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/585.png" },
    { id: 3, name: "Karthik", review: "Best cricket store online.", image: "https://studybizz.com/sports/wp-content/uploads/2024/03/image-131-1024x1024.png" }
  ];

  const containerStyle = {
    padding: "30px",
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center",
  };

  const reviewStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "12px",
    borderRadius: "6px",
    margin: "10px 0",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    gap: "12px",
  };

  const imgStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const textStyle = {
    textAlign: "left",
  };

  return (
    <div style={containerStyle}>
      <h2>Customer Reviews</h2>
      {reviews.map(r => (
        <div key={r.id} style={reviewStyle}>
          <img src={r.image} alt={r.name} style={imgStyle} />
          <div style={textStyle}>
            <strong>{r.name}:</strong> <br /> {r.review}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
