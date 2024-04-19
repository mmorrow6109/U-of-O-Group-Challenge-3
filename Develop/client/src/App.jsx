import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Favorite from './pages/Favorite'


function App() {
  return (
    <div className='App'>
        <Navbar />
        <Sidebar />
        <Favorite />
    </div>
  )
}

export default App
