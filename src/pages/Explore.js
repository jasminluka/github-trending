import React from 'react'

import Header from '../components/Header'
import Trendings from '../components/Trendings'

const Explore = ({ searchValue }) => {
  return (
    <>
      <Header title='Trending' />
      <Trendings searchValue={searchValue} />
    </>
  )
}

export default Explore