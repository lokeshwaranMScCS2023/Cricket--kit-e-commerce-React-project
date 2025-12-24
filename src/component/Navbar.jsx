import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🏏 Cricket Store</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <span style={styles.sep}>|</span>
        <Link to="/products" style={styles.link}>Products</Link>
        <span style={styles.sep}>|</span>
        <Link to="/reviews" style={styles.link}>Reviews</Link>
        <span style={styles.sep}>|</span>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#0d6efd",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 8px",
    fontSize: "16px",
  },
  sep: {
    color: "#cfe2ff",
  },
};

export default Navbar;
