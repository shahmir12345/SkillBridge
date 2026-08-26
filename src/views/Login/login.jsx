import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "./logo.png";

const Login = () => {

  const navigate = useNavigate()

  // Form states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Error message
  const [error, setError] = useState("")


  const handleSubmit = (e) => {

    e.preventDefault()

    setError("")

    // Basic validation
    if (!email || !password) {
      setError("Please enter your email and password.")
      return
    }

    // Get registered users
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || []

    // Find user
    const user = registeredUsers.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    )

    // Invalid credentials
    if (!user) {
      setError("Invalid email or password.")
      return
    }

    // Save logged-in user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    )

    // Go to Home
    navigate("/home")
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-[#03311a] px-4 py-10 sm:px-6">

      {/* Login Container */}
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="rounded-3xl border border-[#D8E3DD] bg-[#2b4e41] p-6 shadow-xl sm:p-8">
        
        {/* Logo Section */}
        <div className="mb-6 text-center">

            {/* Logo */}
            <div className="mx-auto mb-5 flex h-26 w-35 items-center justify-center rounded-2xl sm:h-42  sm:w-57">

            <img src={logo} alt="SkillBridge Logo" className="h-full w-full object-cover"/>

            </div>
        </div>

          {/* Heading */}
          <div className="mb-7 text-center">

            <h2 className="text-2xl font-bold text-[#cadcd5] sm:text-3xl">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#b9d5c1]">
              Login to continue your skill-sharing journey.
            </p>

          </div>


          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}


          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-5">

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#f8fffc]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError("")
                }}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 bg-[#cbddd5] px-4 py-3 text-sm text-[#16241F] outline-none transition placeholder:text-gray-600 focus:border-[#1F6F5C] focus:ring-2 focus:ring-[#1F6F5C]/20"
              />

            </div>


            {/* Password */}
            <div className="mb-6">

              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#ffffff]"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 bg-[#cbddd5] px-4 py-3 text-sm text-[#16241F] outline-none transition placeholder:text-gray-600 focus:border-[#1F6F5C] focus:ring-2 focus:ring-[#1F6F5C]/20"
              />

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#1F6F5C] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#185747] hover:shadow-md active:scale-[0.98]"
            >
              Login
            </button>

          </form>


          {/* Register */}
          <div className="mt-6 border-t border-gray-100 pt-5 text-center">

            <p className="text-sm text-[#ffffff]">
              Don't have an account?

              <button
                type="button"
                onClick={() => navigate("/register")}
                className="ml-1 font-semibold text-[#000000] hover:underline"
              >
                Create one
              </button>

            </p>

          </div>

        </div>


        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs text-[#718078]">
          Connect. Exchange skills. Grow together.
        </p>

      </div>

    </div>
  )
}

export default Login