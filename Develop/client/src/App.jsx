import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import CreateAccountPage from './pages/CreateAccountPage'; // Import the CreateAccountPage component

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
    <Router>
      <div className='App'>
        <Navbar onSearch={handleSearch} />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main movies={searchResults} />} />
            <Route path="/login" element={<CreateAccountPage />} /> {/* Define the route for the login page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
