function ProductCard({product, setSelectedProduct }){
    return(
        <div className='product-card'>
            <img src={product.thumbnail} alt={product.title} />
            <h3> {product.title}</h3>
            
        
        <button onClick={() => setSelectedProduct(product)}>View Details
        </button>
        </div>
    );

}
export default ProductCard;