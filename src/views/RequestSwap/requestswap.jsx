import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { users } from "../../models/userModel"

const RequestSwap = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const user = users.find((user) => user.id === Number(id))

  // Form states
  const [youOffer, setYouOffer] = useState("")
  const [theyOffer, setTheyOffer] = useState("")
  const [message, setMessage] = useState("")

  // Validation error
  const [error, setError] = useState("")


  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F8F5]">

        <h2 className="text-xl font-semibold text-[#16241F]">
          User not found
        </h2>

      </div>
    )
  }


  const handleSubmit = (e) => {

    e.preventDefault()

    // Validation
    if (!youOffer || !theyOffer || !message.trim()) {
      setError("Please complete all fields before sending the request.")
      return
    }


    // Request object
    const newRequest = {
      id: Date.now(),
      memberId: user.id,
      memberName: user.name,
      youOffer: youOffer,
      theyOffer: theyOffer,
      message: message.trim(),
      status: "Pending",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      }),
    }


    // Get existing requests
    const existingRequests =
      JSON.parse(localStorage.getItem("swapRequests")) || []


    // Add new request
    const updatedRequests = [
      ...existingRequests,
      newRequest,
    ]


    // Save requests
    localStorage.setItem(
      "swapRequests",
      JSON.stringify(updatedRequests)
    )


    // Clear error
    setError("")


    // Find users who match both skills
    const relevantMatches = users.filter((person) => {

      // Don't match the selected user with themselves
      if (person.id === user.id) {
        return false
      }


      // Does this person want the skill we are offering?
      const wantsYourSkill = person.wantedSkills.some(
        (skill) =>
          skill.name.toLowerCase() === youOffer.toLowerCase()
      )


      // Does this person offer the skill we want to learn?
      const offersTheirSkill = person.offeredSkills.some(
        (skill) =>
          skill.name.toLowerCase() === theyOffer.toLowerCase()
      )


      return wantsYourSkill && offersTheirSkill
    })


    // Save matches
    localStorage.setItem(
      "currentMatches",
      JSON.stringify(relevantMatches)
    )


    navigate("/matches")
  }


  return (
    <div className="min-h-screen bg-[#F7F8F5] px-6 py-10">

      <div className="mx-auto max-w-2xl">

        {/* Page Heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-[#16241F]">
            Request a Skill Swap
          </h1>

          <p className="mt-2 text-sm text-[#5C6B60]">
            Send a swap request to {user.name}.
          </p>

        </div>


        {/* Selected User */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6">

          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] text-lg font-bold text-white">
              {user.name.charAt(0)}
            </div>


            {/* User Info */}
            <div className="flex-1">

              <h2 className="text-lg font-semibold text-[#16241F]">
                {user.name}
              </h2>

              <p className="text-sm text-[#5C6B60]">
                {user.location}
              </p>

            </div>


            {/* Rating */}
            <div className="flex items-center gap-1 rounded-full bg-[#FFF3CD] px-3 py-1.5">

              <span className="text-sm">
                ★
              </span>

              <span className="text-sm font-semibold text-[#8A6416]">
                {user.rating}
              </span>

            </div>

          </div>

        </div>


        {/* Request Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

          <form onSubmit={handleSubmit}>

            {/* Error */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}


            {/* You Offer */}
            <div className="mb-6">

              <label
                htmlFor="youOffer"
                className="mb-2 block text-sm font-medium text-[#16241F]"
              >
                Teaches
              </label>


              <select
                id="youOffer"
                value={youOffer}
                onChange={(e) => {
                  setYouOffer(e.target.value)
                  setError("")
                }}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
              >

                <option value="" disabled hidden>
                  Select a skill you want to learn
                </option>


                {user.offeredSkills.map((skill) => (
                  <option
                    key={skill.name}
                    value={skill.name}
                  >
                    {skill.name}
                  </option>
                ))}

              </select>

            </div>


            {/* They Offer */}
            <div className="mb-6">

              <label
                htmlFor="theyOffer"
                className="mb-2 block text-sm font-medium text-[#16241F]"
              >
                Wants
              </label>


              <select
                id="theyOffer"
                value={theyOffer}
                onChange={(e) => {
                  setTheyOffer(e.target.value)
                  setError("")
                }}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
              >

                <option value="" disabled hidden>
                  Select a skill you can offer                
                </option>


                {user.wantedSkills.map((skill) => (
                  <option
                    key={skill.name}
                    value={skill.name}
                  >
                    {skill.name}
                  </option>
                ))}

              </select>

            </div>


            {/* Message */}
            <div className="mb-6">

              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#16241F]"
              >
                Message
              </label>


              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                  setError("")
                }}
                placeholder="Write a short message..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
              />

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#1F6F5C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#185747]"
            >
              Send Request
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default RequestSwap