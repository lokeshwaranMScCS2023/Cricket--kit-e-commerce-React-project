import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.section}>
          <h3>🏏 Cricket Store</h3>
          <p>Your one-stop shop for quality cricket kits.</p>
        </div>

        <div style={styles.section}>
          <p>📍 Chennai, India</p>
          <p>📧 cricketstore@gmail.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

        <div style={styles.section}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

      </div>

      <div style={styles.copy}>
        © {new Date().getFullYear()} Cricket Store. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "30px 20px",
    marginTop: "40px"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    textAlign: "center"
  },
  section: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "15px"
  },
  link: {
    display: "block",
    color: "#fff",
    textDecoration: "none",
    margin: "5px 0"
  },
  copy: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px",
    borderTop: "1px solid #444",
    paddingTop: "10px"
  }
};

export default Footer;
