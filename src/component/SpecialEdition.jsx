// import "./SpecialEdition.css";

const specialProducts = [
  {
    id: 1,
    name: "MS Dhoni Limited Edition Bat",
    price: "₹14,999",
    img: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6"
  },
  {
    id: 2,
    name: "Virat Kohli Signature Gloves",
    price: "₹5,499",
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
  },
  {
    id: 3,
    name: "World Cup Special Helmet",
    price: "₹7,999",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d"
  }
];

const SpecialEdition = () => {
  return (
    <section className="special-page">
      <h2 className="special-title">🏏 Special Edition Cricket Products</h2>

      <div className="special-grid">
        {specialProducts.map((item) => (
          <div className="special-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialEdition;
