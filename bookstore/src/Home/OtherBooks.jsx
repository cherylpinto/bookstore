import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const OtherBooks = () => {
    const[books,setBooks]=useState([]);
    useEffect(() =>{
        fetch("http://localhost:9000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(6,data.length)))
    },[]);
  return (
    <div>
      <BookCard books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks
