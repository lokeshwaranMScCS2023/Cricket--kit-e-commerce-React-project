import React from "react";

function Contact() {
  const containerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "25px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const formStyle = {
    marginTop: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        Contact Us
      </h2>

      <p style={{ textAlign: "center", color: "#555" }}>
        Email: cricketstore@gmail.com
      </p>
      <p style={{ textAlign: "center", color: "#555" }}>
        Phone: +91 98765 43210
      </p>

      <form style={formStyle}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <textarea
          placeholder="Message"
          style={{ ...inputStyle, height: "100px", resize: "none" }}
        ></textarea>
        <button style={buttonStyle}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
