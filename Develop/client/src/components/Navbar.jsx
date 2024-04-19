import React, { useState } from 'react';
import '../App.css';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className='navbar'>
      <h1 className='Title'>Title</h1>
      <form onSubmit={handleSearch} id='form'>
        <input
          type="text"
          id="search"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn">Search</button>           
      </form>
    </div>
  );
}

export default Navbar;
