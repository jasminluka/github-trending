import React from 'react'

const Header = ({ title }) => {
  return (
    <header className='flex center'>
      <h1>{title}</h1>
      <h3>See what the GitHub community is most excited about today.</h3>
    </header>
  )
}

export default Header