import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import FavBook from './FavBook'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavouriteBooks/>
      <FavBook/>
    </div>
  )
}

export default Home
