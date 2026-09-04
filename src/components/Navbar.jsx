import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "./logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const handleSignOut = () => {
    localStorage.removeItem("currentUser")
    setMenuOpen(false)
    navigate("/login")
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[#D9DFD3] bg-[#e8e8e8]/95 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}

        <Link
          to="/home"
          className="shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <div className="h-16 w-24 sm:h-18 sm:w-28">
            <img
              src={logo}
              alt="SkillSwap Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="mx-auto hidden items-center gap-1 rounded-full border border-[#D9DFD3] bg-white px-2 py-1.5 shadow-sm md:flex">

          <Link
            to="/home"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive("/home")
                ? "bg-[#E7F1EE] text-[#1F6F5C]"
                : "text-[#5C6B60] hover:bg-[#F2F4EC] hover:text-[#1F6F5C]"
            }`}
          >
            Home
          </Link>

          <Link
            to="/browse"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive("/browse")
                ? "bg-[#E7F1EE] text-[#1F6F5C]"
                : "text-[#5C6B60] hover:bg-[#F2F4EC] hover:text-[#1F6F5C]"
            }`}
          >
            Browse
          </Link>

          <Link
            to="/matches"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive("/matches")
                ? "bg-[#E7F1EE] text-[#1F6F5C]"
                : "text-[#5C6B60] hover:bg-[#F2F4EC] hover:text-[#1F6F5C]"
            }`}
          >
            Matches
          </Link>

          <Link
            to="/myswaps"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive("/myswaps")
                ? "bg-[#E7F1EE] text-[#1F6F5C]"
                : "text-[#5C6B60] hover:bg-[#F2F4EC] hover:text-[#1F6F5C]"
            }`}
          >
            My Swaps
          </Link>

        </div>


        {/* ================= DESKTOP ACTIONS ================= */}

        <div className="hidden items-center gap-3 md:flex">

          <Link
            to="/browse"
            className="rounded-xl bg-[#1F6F5C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#185747] hover:shadow-md"
          >
            Browse Skills
          </Link>

          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-xl border border-[#D9DFD3] bg-white px-4 py-2.5 text-sm font-semibold text-[#5C6B60] transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
          >
            Sign Out
          </button>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9DFD3] bg-white text-xl text-[#16241F] shadow-sm transition hover:bg-[#E7F1EE]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="border-t border-[#D9DFD3] bg-[#F7F8F5] px-4 py-5 shadow-lg md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              to="/home"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive("/home")
                  ? "bg-[#E7F1EE] text-[#1F6F5C]"
                  : "text-[#16241F] hover:bg-white"
              }`}
            >
              Home
            </Link>

            <Link
              to="/browse"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive("/browse")
                  ? "bg-[#E7F1EE] text-[#1F6F5C]"
                  : "text-[#16241F] hover:bg-white"
              }`}
            >
              Browse
            </Link>

            <Link
              to="/matches"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive("/matches")
                  ? "bg-[#E7F1EE] text-[#1F6F5C]"
                  : "text-[#16241F] hover:bg-white"
              }`}
            >
              Matches
            </Link>

            <Link
              to="/myswaps"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive("/myswaps")
                  ? "bg-[#E7F1EE] text-[#1F6F5C]"
                  : "text-[#16241F] hover:bg-white"
              }`}
            >
              My Swaps
            </Link>


            {/* Browse Button */}

            <Link
              to="/browse"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#1F6F5C] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#185747]"
            >
              Browse Skills
            </Link>


            {/* Sign Out */}

            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
            >
              Sign Out
            </button>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar