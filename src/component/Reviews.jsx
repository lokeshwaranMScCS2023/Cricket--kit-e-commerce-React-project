import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rahul",
      review: "Excellent quality bat!",
      image: "https://www.cricgram.com/wp-content/uploads/2019/08/KL-Rahul.jpg",
    },
    {
      id: 2,
      name: "Arjun",
      review: "Fast delivery and good service.",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/585.png",
    },
    {
      id: 3,
      name: "Karthik",
      review: "Best cricket store online.",
      image: "https://studybizz.com/sports/wp-content/uploads/2024/03/image-131-1024x1024.png",
    },
  ]);

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !reviewText) {
      alert("Please fill name and review");
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      review: reviewText,
      image:
        image ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setReviewText("");
    setImage("");
  };

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    padding: "50px 20px",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
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

  const reviewStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "12px",
    borderRadius: "10px",
    margin: "15px 0",
    boxShadow: "0 0 10px #00f, 0 0 20px #0ff",
    gap: "12px",
    transition: "0.3s",
  };

  const imgStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <div style={contentStyle}>
        <h2 style={{ textShadow: "0 0 15px cyan" }}>Customer Reviews</h2>

        {/* ⭐ Add Review Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <textarea
            placeholder="Your Review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={inputStyle}
          />
          <button style={btnStyle}>Submit Review</button>
        </form>

        {/* ⭐ Reviews List */}
        {reviews.map((r) => (
          <div key={r.id} style={reviewStyle}>
            <img src={r.image} alt={r.name} style={imgStyle} />
            <div style={{ textAlign: "left" }}>
              <strong>{r.name}</strong>
              <p>{r.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "6px",
  border: "none",
};

const btnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  background: "cyan",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Reviews;
