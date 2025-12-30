import React, { useState } from "react";

function Contact() {
  // 📝 Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 📦 Stored Messages
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
    };

    setMessages([newMessage, ...messages]);

    // reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  const pageStyle = {
    position: "relative",
    minHeight: "100vh",
    padding: "60px 20px",
    textAlign: "center",
    color: "#fff",
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

  const containerStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "500px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: "15px",
    boxShadow: "0 0 20px cyan",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "none",
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>

      <div style={containerStyle}>
        <h2 style={{ textShadow: "0 0 15px cyan" }}>Contact Us</h2>

        {/* 📩 Contact Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            style={{ ...inputStyle, height: "100px", resize: "none" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button style={buttonStyle}>Send</button>
        </form>

        {/* 📦 Stored Messages */}
        {messages.length > 0 && (
          <>
            <h3 style={{ marginTop: "25px" }}>Messages</h3>
            {messages.map((msg) => (
              <div key={msg.id} style={msgBoxStyle}>
                <strong>{msg.name}</strong>
                <p>{msg.message}</p>
                <small>{msg.email}</small>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "cyan",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

const msgBoxStyle = {
  marginTop: "10px",
  padding: "10px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "8px",
};

export default Contact;
