import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './shop/shop';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import SingleBookData from './shop/SingleBookData';
import MyFooter from './components/MyFooter';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book/:id" element={<SingleBookData/>} />
        </Routes>
        <MyFooter/>
    </Router>
    </>
  )
}

export default App
