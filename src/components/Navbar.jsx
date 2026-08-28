import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "./logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-gray-200 bg-white">

      <div className="mx-auto flex h-26 max-w-7xl items-center px-6">

        {/* Logo */}
        <Link
          to="/home"
          className="text-xl font-bold text-gray-900"
        >
          <div className="h-26 w-35 sm:h-26 sm:w-40">
            <img src={logo} alt="SkillBridge Logo" className="h-full w-full object-cover"/>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <div className="mx-auto hidden items-center gap-8 md:flex">

          <Link
            to="/home"
            className="text-sm sm:text-base  font-medium text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>

          <Link
            to="/browse"
            className="text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900"
          >
            Browse
          </Link>

          <Link
            to="/matches"
            className="text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900"
          >
            Matches
          </Link>

          <Link
            to="/myswaps"
            className="text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900"
          >
            My Swaps
          </Link>

        </div>


        {/* Desktop Browse Skills Button */}
        <Link
          to="/browse"
          className="hidden rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 hover:scale-102 md:block"
        >
          Browse Skills
        </Link>

        {/* Desktop Browse Skills Button */}
        <Link
          to="/login"
          className="ml-3 hidden rounded-lg bg-red-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 hover:scale-102 md:block"
        >
          Sign Out
        </Link>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto text-2xl text-gray-900 md:hidden"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (

        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>

            <Link
              to="/browse"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Browse
            </Link>

            <Link
              to="/matches"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Matches
            </Link>

            <Link
              to="/myswaps"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              My Swaps
            </Link>


            {/* Mobile Browse Skills */}
            <Link
              to="/browse"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Browse Skills
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-lg bg-red-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Sign Out
            </Link>

          </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar