import React from 'react'
import '../App'

function Navbar() {
  return (
    <>
			<div className='navbar'>
				<h1 className='Title'>Title</h1>
				<form id='form'>
					<input type="text" id="search" class="search"/>
					<button type="submit" class="btn">Search</button>           
				</form>
			</div>
    </>
  )
}

export default Navbar
