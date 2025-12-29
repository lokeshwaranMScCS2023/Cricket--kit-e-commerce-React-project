import React from "react";

function Contact() {
  const pageStyle = {
    position: "relative",
    minHeight: "100vh",
    padding: "60px 20px",
    textAlign: "center",
    color: "#fff",
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

  const containerStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "500px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "rgba(0,0,0,0.6)", // semi-transparent dark container
    borderRadius: "15px",
    boxShadow: "0 0 20px #00f, 0 0 40px #0ff",
  };

  const formStyle = {
    marginTop: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#00f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 0 10px #00f, 0 0 20px #0ff",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    boxShadow: "0 0 20px #00f, 0 0 40px #0ff",
    transform: "scale(1.05)",
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
        <h2 style={{ textShadow: "0 0 10px #00f, 0 0 20px #0ff" }}>Contact Us</h2>
        <p style={{ color: "#ccc" }}>Email: cricketstore@gmail.com</p>
        <p style={{ color: "#ccc" }}>Phone: +91 98765 43210</p>

        <form style={formStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea
            placeholder="Message"
            style={{ ...inputStyle, height: "100px", resize: "none" }}
          ></textarea>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
