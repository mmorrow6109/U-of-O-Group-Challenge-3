import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='App'>
        <Navbar />
        <Sidebar />
    </div>
  )
}

export default App
