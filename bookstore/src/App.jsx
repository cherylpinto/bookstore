import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Shop from "./shop/shop";
import About from "./components/About";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import SingleBookData from "./shop/SingleBookData";
import MyFooter from "./components/MyFooter";
import DashboardLayout from "./Dashboard/DashboardLayout";
import Dashboard from "./Dashboard/Dashboard";
import Upload from "./Dashboard/Upload";
import ManageBook from "./Dashboard/ManageBook";
import EditBooks from "./Dashboard/EditBooks";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/admin/dashboard");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book/:id" element={<SingleBookData />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>}/>

          {/* Protected Admin Routes */}
          <Route
            path="/admin/dashboard/*"
            element={
                <DashboardLayout />  
            }
          >
            <Route index element={<PrivateRoute>
              <Dashboard />
              </PrivateRoute>
              } />
            <Route path="upload" element={<Upload />} />
            <Route path="manage" element={<ManageBook />} />
            <Route path="edit-books/:id" element={<EditBooks />} />
          </Route>
        </Routes>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
