import React from 'react'

const Developer = ({ no, avatar, name, url }) => {
  return (
    <div className='developer flex'>
      <div className="number">{no}</div>
      <div className="dev-details flex">
        <div className="image">
          <img className='bigImg' src={avatar} alt={name} />
        </div>
        <div className="user">
          <a href={url}><h2 className="name">{name}</h2></a>
          <a href={url}><h3 className="username">{name}</h3></a>
        </div>
      </div>
    </div>
  )
}

export default Developer