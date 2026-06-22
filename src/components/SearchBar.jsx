function SearchBar({searchTerm,setSearchTerm}){
    return(
        <input
        type="text"
        placeholder="search products.."
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        
    );
    
}

export default SearchBar;
