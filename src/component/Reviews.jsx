import React from 'react';

function Reviews() {
  const reviews = [
    { id: 1, name: "Rahul", review: "Excellent quality bat!", image: "https://www.cricgram.com/wp-content/uploads/2019/08/KL-Rahul.jpg" },
    { id: 2, name: "Arjun", review: "Fast delivery and good service.", image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/585.png" },
    { id: 3, name: "Karthik", review: "Best cricket store online.", image: "https://studybizz.com/sports/wp-content/uploads/2024/03/image-131-1024x1024.png" }
  ];

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    padding: "50px 20px",
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

  const reviewStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "12px",
    borderRadius: "10px",
    margin: "15px 0",
    boxShadow: "0 0 10px #00f, 0 0 20px #0ff",
    gap: "12px",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const imgStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 0 8px #00f, 0 0 15px #0ff",
  };

  const textStyle = {
    textAlign: "left",
  };

  const reviewHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 0 20px #00f, 0 0 40px #0ff",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={{ textShadow: "0 0 10px #00f, 0 0 20px #0ff" }}>Customer Reviews</h2>
        {reviews.map(r => (
          <div
            key={r.id}
            style={reviewStyle}
            onMouseEnter={e => Object.assign(e.currentTarget.style, reviewHoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, reviewStyle)}
          >
            <img src={r.image} alt={r.name} style={imgStyle} />
            <div style={textStyle}>
              <strong>{r.name}:</strong> <br /> {r.review}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
