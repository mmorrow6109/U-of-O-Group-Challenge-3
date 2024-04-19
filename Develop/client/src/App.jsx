import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=98004180d78f252683de0c075cf644a1&query=${searchTerm}`;
    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className='App'>
      <Navbar onSearch={handleSearch} />
      <div className="main">
        <Sidebar />
        <Main movies={searchResults} />
      </div>
    </div>
  );
}

export default App;
