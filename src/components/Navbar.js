import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ searchValue, setSearchValue }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <nav className='flex center'>
      <ul className="navbar flex space-between">
        <li><Link to='/'>Why GitHub?</Link></li>
        <li><Link to='/team'>Team</Link></li>
        <li><Link to='/enterprise'>Enterprise</Link></li>
        <li><Link to='/explore'>Explore</Link></li>
        <li><Link to='/marketplace'>Market Place</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>
        <li>
          <input
            type="text"
            name="searchbar"
            className='search-bar'
            placeholder={`${!isFocused ? 'Search GitHub...' : ''}`}
            value={searchValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={e => setSearchValue(e.target.value)}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar