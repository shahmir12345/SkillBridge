import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registration = () => {

  const navigate = useNavigate()

  // Form states
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [contact, setContact] = useState("")

  // Error and success messages
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")


  const handleSubmit = (e) => {

    e.preventDefault()

    // Clear previous messages
    setError("")
    setSuccess("")


    // Remove unnecessary spaces
    const cleanName = name.trim()
    const cleanEmail = email.trim().toLowerCase()
    const cleanContact = contact.trim()


    // ================= VALIDATION =================

    if (
      !cleanName ||
      !cleanEmail ||
      !password ||
      !confirmPassword ||
      !cleanContact
    ) {
      setError("Please complete all fields.")
      return
    }


    // Name validation
    if (cleanName.length < 3) {
      setError("Name must contain at least 3 characters.")
      return
    }


    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(cleanEmail)) {
      setError("Please enter a valid email address.")
      return
    }


    // Password validation
    if (password.length < 6) {
      setError("Password must contain at least 6 characters.")
      return
    }


    // Confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }


    // Contact validation
    if (!/^\d{11}$/.test(cleanContact)) {
      setError("Contact number must contain exactly 11 digits.")
      return
    }


    // ================= GET EXISTING USERS =================

    const existingUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || []


    // ================= DUPLICATE EMAIL CHECK =================

    const emailExists = existingUsers.some(
      (user) => user.email === cleanEmail
    )

    if (emailExists) {
      setError("An account with this email already exists.")
      return
    }


    // ================= CREATE USER =================

    const newUser = {
      id: Date.now(),
      name: cleanName,
      email: cleanEmail,
      password: password,
      contact: cleanContact,
    }


    // Add new user
    const updatedUsers = [
      ...existingUsers,
      newUser,
    ]


    // Save users
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(updatedUsers)
    )


    // ================= SUCCESS =================

    setSuccess("Account created successfully!")


    // Clear form
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setContact("")


    // Go to login page
    setTimeout(() => {
      navigate("/login")
    }, 1000)
  }


  return (
    <div className="min-h-screen bg-[#F7F8F5]">

      <div className="flex min-h-screen flex-col lg:flex-row">

{/* ================= LEFT SIDE ================= */}

<div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-[#1F6F5C] px-8 py-14 text-white sm:px-12 lg:min-h-screen lg:w-1/2 lg:px-16">

  {/* Decorative circles */}

  <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5" />

  <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-white/5" />

  <div className="relative z-10 flex max-w-xl flex-col items-center text-center">

    {/* Logo Placeholder */}

    <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-3xl border border-white/30 bg-white/10 text-base font-semibold tracking-wide backdrop-blur-sm sm:h-36 sm:w-36">
      LOGO
    </div>


    {/* Website Name */}

    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
      SkillSwap
    </h1>


    {/* Small Divider */}

    <div className="my-6 h-1 w-16 rounded-full bg-white/60" />


    {/* Description */}

    <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base">
      Exchange your skills, learn from others, and grow together.
      Connect with people who can teach what you want to learn while
      sharing what you already know.
    </p>


    {/* Feature */}

    <div className="mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-sm">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm">
        ✓
      </div>

      <p className="text-sm font-medium text-white/90">
        Learn. Share. Grow together.
      </p>

    </div>

  </div>

</div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="flex w-full items-center justify-center bg-[#F7F8F5] px-6 py-12 sm:px-10 lg:w-1/2 lg:px-16">

          <div className="w-full max-w-md">

            {/* Heading */}

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-[#16241F]">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-[#5C6B60]">
                Join SkillSwap and start exchanging your skills.
              </p>

            </div>


            {/* ================= MESSAGES ================= */}

            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}


            {success && (
              <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}


            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#16241F]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    setError("")
                  }}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
                />

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#16241F]"
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
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
                />

              </div>


              {/* Password */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#16241F]"
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
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
                />

              </div>


              {/* Confirm Password */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-[#16241F]"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    setError("")
                  }}
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
                />

              </div>


              {/* Contact */}

              <div>

                <label
                  htmlFor="contact"
                  className="mb-2 block text-sm font-medium text-[#16241F]"
                >
                  Contact Number
                </label>

                <input
                  id="contact"
                  type="tel"
                  value={contact}
                  onChange={(e) => {

                    const value = e.target.value

                    // Only numbers + maximum 11 digits
                    if (/^\d{0,11}$/.test(value)) {
                      setContact(value)
                      setError("")
                    }

                  }}
                  placeholder="03XXXXXXXXX"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
                />

              </div>


              {/* Register Button */}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1F6F5C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#185747] focus:outline-none focus:ring-2 focus:ring-[#1F6F5C] focus:ring-offset-2"
              >
                Create Account
              </button>

            </form>


            {/* Login */}

            <p className="mt-6 text-center text-sm text-[#5C6B60]">

              Already have an account?{" "}

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-[#1F6F5C] hover:underline"
              >
                Login
              </button>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Registration
