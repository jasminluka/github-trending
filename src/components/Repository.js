import React from 'react'

const Repository = ({ name, description, language, stars, forks, url }) => {
  return (
    <div className='repository'>
      <div className="repo-details">
        <a href={url}><h2 className='repo-name'>{name}</h2></a>
        <p className='mt mb'>{description}</p>
        <div className="details flex">
          <span className='mr'>{language}</span>
          <span className='mr'>Stars: {stars}</span>
          <span className='mr'>Forks: {forks}</span>
        </div>
      </div>
    </div>
  )
}

export default Repository