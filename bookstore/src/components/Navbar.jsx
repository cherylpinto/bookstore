import React, { useContext, useEffect, useState } from "react";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            {user && user.displayName ? (
              <div className="w-10 h-10 bg-blue-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
                {user.displayName.charAt(0).toUpperCase()}
              </div>
            ) : (
              <button>
                <Link
                  to="/login"
                  className="text-base text-white font-semibold border px-5 py-2 lg:rounded-full bg-blue-600 hover:bg-blue-700"
                >
                  Login
                </Link>
              </button>
            )}
          </div>
          <div className="md:hidden flex gap-5">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {menuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
            {user && user.displayName ? (
              <div className="w-10 h-10 bg-blue-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
                {user.displayName.charAt(0).toUpperCase()}
              </div>
            ) : (
              <button>
                <Link
                  to="/login"
                  className="text-base text-white uppercase border lg:rounded bg-blue-700 hover:text-blue-700"
                >
                  Login
                </Link>
              </button>
            )}
          </div>
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              menuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-white uppercase cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
