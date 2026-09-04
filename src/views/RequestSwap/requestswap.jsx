import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { users } from "../../models/userModel"

const RequestSwap = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const user = users.find((user) => user.id === Number(id))

  const [youOffer, setYouOffer] = useState("")
  const [theyOffer, setTheyOffer] = useState("")
  const [message, setMessage] = useState("")

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

    if (!youOffer || !theyOffer || !message.trim()) {
      setError("Please complete all fields before sending the request.")
      return
    }


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


    const existingRequests =
      JSON.parse(localStorage.getItem("swapRequests")) || []


    const updatedRequests = [
      ...existingRequests,
      newRequest,
    ]


    localStorage.setItem(
      "swapRequests",
      JSON.stringify(updatedRequests)
    )


    setError("")


    // Find relevant matches
    const relevantMatches = users.filter((person) => {

      if (person.id === user.id) {
        return false
      }


      const wantsYourSkill = person.wantedSkills.some(
        (skill) =>
          skill.name.toLowerCase() === youOffer.toLowerCase()
      )


      const offersTheirSkill = person.offeredSkills.some(
        (skill) =>
          skill.name.toLowerCase() === theyOffer.toLowerCase()
      )


      return wantsYourSkill && offersTheirSkill
    })


    localStorage.setItem(
      "currentMatches",
      JSON.stringify(relevantMatches)
    )


    navigate("/matches")
  }


  return (
    <main className="min-h-screen bg-[#e2e0e0] text-[#16241F]">


      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#153F35] text-white">

        {/* Decorative circles */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1F6F5C]/40" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#1F6F5C]/30" />

        <div className="absolute right-[20%] top-[30%] h-24 w-24 rounded-full bg-[#E2982F]/10" />


        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 md:px-12">

          <div className="max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">

              <span className="h-2 w-2 rounded-full bg-[#E2982F]" />

              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
                Skill exchange
              </span>

            </div>


            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Request a Skill Swap
            </h1>


            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Send a swap request to {user.name} and exchange your knowledge
              with theirs.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="px-5 py-10 sm:px-8 md:px-12 md:py-14">

        <div className="mx-auto max-w-3xl">


          {/* Back Button */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 text-sm font-semibold text-[#1F6F5C] transition hover:text-[#153F35]"
          >
            ← Back to Profile
          </button>


          {/* =================================================
              SELECTED USER CARD
          ================================================= */}

          <div className="mb-6 rounded-2xl border border-[#D9DFD3] bg-white p-5 shadow-sm sm:p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

              {/* Avatar */}

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-xl text-white shadow-sm">
                {user.name.charAt(0)}
              </div>


              {/* User Info */}

              <div className="flex-1">

                <h2 className="text-lg font-semibold text-[#16241F]">
                  {user.name}
                </h2>

                <p className="mt-0.5 text-sm text-[#5C6B60]">
                  {user.location}
                </p>

              </div>


              {/* Rating */}

              <div className="flex w-fit items-center gap-1 rounded-full bg-[#FFF3CD] px-3 py-1.5">

                <span className="text-sm">
                  ★
                </span>

                <span className="text-sm font-semibold text-[#8A6416]">
                  {user.rating}
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              REQUEST FORM
          ================================================= */}

          <div className="rounded-2xl border border-[#D9DFD3] bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-7">

              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
                Create request
              </div>

              <h2 className="font-serif text-2xl font-semibold text-[#16241F]">
                Build your skill exchange
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#5C6B60]">
                Choose the skill you want to learn and the skill you can
                offer in return.
              </p>

            </div>


            <form onSubmit={handleSubmit}>


              {/* Error */}

              {error && (

                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>

              )}


              {/* =================================================
                  YOU OFFER
              ================================================= */}

              <div className="mb-6">

                <label
                  htmlFor="youOffer"
                  className="mb-2 block text-sm font-semibold text-[#16241F]"
                >
                  Skill you want to learn
                </label>


                <select
                  id="youOffer"
                  value={youOffer}
                  onChange={(e) => {
                    setYouOffer(e.target.value)
                    setError("")
                  }}
                  className="w-full rounded-xl border border-[#CBD4C8] bg-white px-4 py-3 text-sm text-[#16241F] outline-none transition focus:border-[#1F6F5C] focus:ring-2 focus:ring-[#E7F1EE]"
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


              {/* =================================================
                  THEY OFFER
              ================================================= */}

              <div className="mb-6">

                <label
                  htmlFor="theyOffer"
                  className="mb-2 block text-sm font-semibold text-[#16241F]"
                >
                  Skill you can offer
                </label>


                <select
                  id="theyOffer"
                  value={theyOffer}
                  onChange={(e) => {
                    setTheyOffer(e.target.value)
                    setError("")
                  }}
                  className="w-full rounded-xl border border-[#CBD4C8] bg-white px-4 py-3 text-sm text-[#16241F] outline-none transition focus:border-[#1F6F5C] focus:ring-2 focus:ring-[#E7F1EE]"
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


              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="mb-7">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#16241F]"
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
                  placeholder="Introduce yourself and explain what you'd like to learn..."
                  className="w-full resize-none rounded-xl border border-[#CBD4C8] bg-white px-4 py-3 text-sm text-[#16241F] outline-none transition placeholder:text-[#89948C] focus:border-[#1F6F5C] focus:ring-2 focus:ring-[#E7F1EE]"
                />

              </div>


              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1F6F5C] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#185747] hover:shadow-md"
              >
                Send Swap Request
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  )
}

export default RequestSwap
