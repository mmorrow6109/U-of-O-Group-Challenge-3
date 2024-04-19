import React, { useState } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  const [movies, setMovies] = useState([]); // State to store the fetched movies

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=98004180d78f252683de0c075cf644a1&query=${encodeURIComponent(searchTerm)}`;
      
      try {
        const response = await fetch(apiurl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    }
  };

  return (
    <div className='navbar'>
      <h1 className='Title'>Title</h1>
      <form onSubmit={handleSubmit} id='form'>
        <input
          type="text"
          id="search"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit" className="btn">Search</button>
      </form>
      
      <div id="content">
        {movies.map(movie => (
          <div key={movie.id} className="movie">
            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>{movie.vote_average}</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              {movie.overview}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
