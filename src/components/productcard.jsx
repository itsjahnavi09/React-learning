function ProductCard(props) {
  return (
    <div className="product-card">
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <p>Category: {props.category}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;