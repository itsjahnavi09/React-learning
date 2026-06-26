import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Loader from "./components/Loader";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (query === "") return;

    setLoading(true);
    setError("");
    setMovies([]);

    fetch(`https://www.omdbapi.com/?apikey=3e51aed1&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError("No movies found.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  }, [query]);

  function handleSearch() {
    if (searchTerm.trim() === "") {
      setError("Please enter a movie name.");
      setMovies([]);
      return;
    }

    setQuery(searchTerm.trim());
  }

  function viewDetails(id) {
    fetch(`https://www.omdbapi.com/?apikey=3e51aed1&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMovie(data);
      });
  }

  function closeModal() {
    setSelectedMovie(null);
  }

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {loading && <Loader />}

      {error && !loading && <p className="error">{error}</p>}

      <div className="movie-container">
        {!loading &&
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              viewDetails={viewDetails}
            />
          ))}
      </div>

      {selectedMovie && (
        <div className="modal-bg">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>

            <h2>{selectedMovie.Title}</h2>
            <p><b>Year:</b> {selectedMovie.Year}</p>
            <p><b>Genre:</b> {selectedMovie.Genre}</p>
            <p><b>Director:</b> {selectedMovie.Director}</p>
            <p><b>Actors:</b> {selectedMovie.Actors}</p>
            <p><b>Plot:</b> {selectedMovie.Plot}</p>
            <p><b>IMDB Rating:</b> {selectedMovie.imdbRating}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
