function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;