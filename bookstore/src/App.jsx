import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./shop/shop";
import About from "./components/About";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import SingleBookData from "./shop/SingleBookData";
import MyFooter from "./components/MyFooter";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Upload from "./components/Dashboard/Upload";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book/:id" element={<SingleBookData />} />
            <Route path="/admin/dashboard" element={<DashboardLayout/>}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/dashboard/upload" element={<Upload />} />
            </Route>
          </Routes>
        </div>
        <MyFooter />
      </Router>
    </>
  );
}

export default App;
