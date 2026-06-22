import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function ProductExplorer(){
    const[products,setProducts]=useState([]);
    const[searchTerm,setSearchTerm]=useState("");
    const[selectedCategory,setSelectedCategory]=useState("all");
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(()=> {
        fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data)=> {
            setProducts(data.products);
            setLoading(false);
        })
        .catch(()=> {
            setError("Something went wrong");
            setLoading(false);
        });


    },[]);
    
    const categories = ["all",...new Set(products.map((product) => product.category)),];

    const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;});

    const sortedProducts = [...filteredProducts];

if (sortOrder === "lowToHigh") {
  sortedProducts.sort((a, b) => a.price - b.price);
}

if (sortOrder === "highToLow") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

   if (loading) {
    return <h2>Loading Products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Product Explorer</h1>
      
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <select
       value={sortOrder}
       onChange={(e) => setSortOrder(e.target.value)}
       >
      <option value="">Sort By Price</option>
      < option value="lowToHigh">Low to High</option>
      <option value="highToLow">High to Low</option>
      </select>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <p className="total-products">
       Total Products Found: {filteredProducts.length} </p>

      <div className="products-grid">
        {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
            product={product}
            setSelectedProduct={setSelectedProduct}
/>
        ))}
      </div>
      {selectedProduct && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>{selectedProduct.title}</h2>

      <img
        src={selectedProduct.thumbnail}
        alt={selectedProduct.title}
      />

      <p>Price: ${selectedProduct.price}</p>
      <p>Category: {selectedProduct.category}</p>
      <p>Rating:  {selectedProduct.rating}</p>

      <button onClick={() => setSelectedProduct(null)}>
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default ProductExplorer;

