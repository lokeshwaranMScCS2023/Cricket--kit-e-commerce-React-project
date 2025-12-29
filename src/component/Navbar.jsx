import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🏏 Cricket Store</h2>

      <div style={styles.links}>
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
    padding: "16px 28px",
    position: "sticky",
    top: 0,
    zIndex: 1000,

    /* Background image + glass effect */
    backgroundImage:
      "url('https://th.bing.com/th/id/R.397712ef84fbc286f562d874a646b32a?rik=pZ%2frM9p4kW%2bFxw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f4%2f41%2fCricket_ball_on_grass.jpg&ehk=LwRky8BubWT8NyGyY9%2bya6S2Xr8fRE49VEpanrRjNL0%3d&risl=&pid=ImgRaw&r=0')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#170612ff",

    boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
    textShadow: "0 0 12px #00ffcc",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  link: {
    color: "#c42e0fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "6px 14px",
    borderRadius: "20px",
    background: "rgba(0, 0, 0, 0.35)",
    boxShadow: "0 0 10px rgba(0,255,204,0.3)",
    transition: "all 0.3s ease",
  },

  sep: {
    color: "#bbb",
  },
};

export default Navbar;
