import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './shop/shop';
import About from './components/About';
import Blog from './components/Blog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
