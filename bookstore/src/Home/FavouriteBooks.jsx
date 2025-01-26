import React, { useState,useEffect } from 'react'
import BookCard from '../components/BookCard';

const FavouriteBooks = () => {
    const[books,setBooks]=useState([]);
    useEffect(() =>{
        fetch("http://localhost:9000/all-books").then(res=>res.json()).then(data=>setBooks(data))
    },[]);
  return (
    <div>
      <BookCard books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default FavouriteBooks
