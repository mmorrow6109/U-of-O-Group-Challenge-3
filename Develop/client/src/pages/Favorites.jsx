import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorited movies when component mounts
  useEffect(() => {
    fetchFavorites();
  }, []);

  // Function to fetch favorited movies from the backend API
  const fetchFavorites = async () => {
    try {
      // Make a GET request to your backend API to retrieve favorited movies
      const response = await axios.post('/api/favorites/getFavoredMovies', {
        userFrom: 'user_id', // Replace 'user_id' with the actual user ID
      });

      // Update the state with the fetched favorites
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="movie-container">
        {favorites.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
