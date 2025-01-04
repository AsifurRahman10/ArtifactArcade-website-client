import React, { useContext, useState } from "react";
import "flowbite";
import logo from "../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const li = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-custom-btn" : "")}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/allArtifacts"
        className={({ isActive }) => (isActive ? "text-custom-btn" : "")}
      >
        <li>All Artifacts</li>
      </NavLink>
      <NavLink
        to="/add_artifacts"
        className={({ isActive }) => (isActive ? "text-custom-btn" : "")}
      >
        <li>Add Artifacts</li>
      </NavLink>
    </>
  );
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 small-text max-w-screen-2xl mx-auto relative z-40">
      <div className="flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <img src={logo} className="h-20 w-20" alt="Logo" />

        {/* User Profile Section */}
        {user ? (
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse translate-x-20 md:translate-x-0 relative">
            {/* User Menu Button */}
            <button
              type="button"
              onClick={handleDropDown}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-16 h-16 rounded-full"
                src={user?.photoURL}
                alt="User photo"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="z-50 absolute -right-10 top-20 md:right-10 md:top-20 lg:-right-16 lg:top-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {user?.displayName}
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <Link
                      to={"/myArtifacts"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      My Artifacts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/likedArtifacts"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Liked Artifacts
                    </Link>
                  </li>
                  <li onClick={handleSignOut}>
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center translate-x-16 md:translate-x-0 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/login">
              <button className="btn bg-custom-btn text-white px-8 rounded-none font-bold">
                Login
              </button>
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={handleNavbarOpen}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Items */}
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {li}
          </ul>
        </div>
      </div>
    </nav>
  );
};
