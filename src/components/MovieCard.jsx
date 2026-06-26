function MovieCard({ movie, viewDetails }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x400?text=No+Poster"
        }
        alt={movie.Title}
      />

      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>

      <button
        className="details-btn"
        onClick={() => viewDetails(movie.imdbID)}
      >
        View Details
      </button>
    </div>
  );
}

export default MovieCard;