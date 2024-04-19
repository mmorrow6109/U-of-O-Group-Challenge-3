import React, { useState } from 'react';

function Main({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="main">
      <h2>Search Results</h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
              onClick={() => setSelectedMovie(movie)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentNode.style.display = 'none'; // Hide the container if image loading fails
              }}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
