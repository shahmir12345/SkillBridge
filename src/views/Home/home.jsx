import React, { useState } from "react"
import { users } from "../../models/userModel"
import { Link } from "react-router-dom"

const Home = () => {

  const [showHowItWorks, setShowHowItWorks] = useState(false)

  return (
    <main className="min-h-screen bg-[#F7F8F5] text-[#16241F]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#153F35] text-white">

        {/* Decorative Background Shapes */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1F6F5C]/40" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#1F6F5C]/30" />

        <div className="absolute right-[20%] top-[30%] h-24 w-24 rounded-full bg-[#E2982F]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-24">

          <div className="max-w-3xl">

            {/* Eyebrow */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">

              <span className="h-2 w-2 rounded-full bg-[#E2982F]" />

              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
                A community skill exchange
              </span>

            </div>


            {/* Main Heading */}

            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">

              Trade what you know

              <br />

              <em className="text-[#8FD0BC]">
                for what you want to learn
              </em>

            </h1>


            {/* Description */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">

              List a skill you can teach, find someone who wants it, and swap
              for a skill you've been wanting to pick up — no money involved.

            </p>


            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/browse"
                className="rounded-xl bg-[#E2982F] px-6 py-3 text-center text-sm font-semibold text-[#153F35] shadow-lg transition hover:bg-[#F0AC4D] hover:shadow-xl"
              >
                Browse Skills
              </Link>

              <button
                type="button"
                onClick={() => setShowHowItWorks(true)}
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#153F35]"
              >
                See how it works
              </button>

            </div>


            {/* Skill Swap Visual */}

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">

              <div className="rounded-full border border-[#6FB8A4] bg-white/10 px-4 py-2.5 backdrop-blur-sm">

                <span className="font-mono text-xs text-[#D7F0E8]">
                  I teach → React
                </span>

              </div>


              <span className="text-xl text-[#E2982F]">
                ⇄
              </span>


              <div className="rounded-full border border-[#E2982F]/70 bg-[#E2982F]/10 px-4 py-2.5 backdrop-blur-sm">

                <span className="font-mono text-xs text-[#F8D79E]">
                  I learn → Python
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO / STATS STRIP
      ===================================================== */}

      <section className="border-b border-[#D9DFD3] bg-[#e2e0e0]">

        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#D9DFD3] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 md:px-12">

          <div className="px-4 py-6 text-center sm:py-7">
            <div className="text-lg font-bold text-[#1F6F5C]">
              Learn
            </div>
            <p className="mt-1 text-xs text-[#5C6B60]">
              Discover skills from others
            </p>
          </div>

          <div className="px-4 py-6 text-center sm:py-7">
            <div className="text-lg font-bold text-[#1F6F5C]">
              Share
            </div>
            <p className="mt-1 text-xs text-[#5C6B60]">
              Teach what you already know
            </p>
          </div>

          <div className="px-4 py-6 text-center sm:py-7">
            <div className="text-lg font-bold text-[#1F6F5C]">
              Grow
            </div>
            <p className="mt-1 text-xs text-[#5C6B60]">
              Connect through skill exchange
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED MEMBERS
      ===================================================== */}

      <section className="bg-[#e2e0e0] px-5 py-14 sm:px-8 md:px-12 md:py-16">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
                Community
              </div>

              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                Featured members
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-[#5C6B60]">
                Meet people who are ready to exchange knowledge and learn
                something new.
              </p>

            </div>


            <Link
              to="/browse"
              className="w-fit text-sm font-semibold text-[#1F6F5C] hover:underline"
            >
              View all skills →
            </Link>

          </div>


          {/* Members Grid */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {users.slice(0, 3).map((user) => (

              <div
                key={user.id}
                className="group rounded-2xl border border-[#D9DFD3] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B8CEC5] hover:shadow-lg"
              >

                {/* User Information */}

                <div className="mb-5 flex items-center gap-3">

                  {/* Avatar */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-lg text-white shadow-sm">
                    {user.name.charAt(0)}
                  </div>


                  {/* Name + Location */}

                  <div className="min-w-0">

                    <div className="truncate text-sm font-semibold text-[#16241F]">
                      {user.name}
                    </div>

                    <div className="mt-0.5 truncate text-xs text-[#5C6B60]">
                      {user.location}
                    </div>

                  </div>

                </div>


                {/* Divider */}

                <div className="mb-4 h-px bg-[#E7ECE5]" />


                {/* Offers */}

                <div>

                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#7A867E]">
                    Can teach
                  </p>

                  <span className="inline-block rounded-full bg-[#E7F1EE] px-3 py-1.5 font-mono text-[11px] text-[#153F35]">
                    {user.offeredSkills[0].name}
                  </span>

                </div>


                {/* Wants */}

                <div className="mt-4">

                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#7A867E]">
                    Wants to learn
                  </p>

                  <span className="inline-block rounded-full bg-[#FBE7C6] px-3 py-1.5 font-mono text-[11px] text-[#8A5C15]">
                    {user.wantedSkills[0].name}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS MODAL
      ===================================================== */}

      {showHowItWorks && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#16241F]/70 px-4 py-6 backdrop-blur-sm">

          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#F7F8F5] p-6 shadow-2xl sm:p-8">

            {/* Close Button */}

            <button
              type="button"
              onClick={() => setShowHowItWorks(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-gray-500 shadow-sm transition hover:text-[#1F6F5C]"
              aria-label="Close modal"
            >
              ✕
            </button>


            {/* Heading */}

            <div className="mb-7 pr-10">

              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
                Simple process
              </div>

              <h2 className="text-2xl font-bold text-[#16241F] sm:text-3xl">
                How SkillSwap Works
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#5C6B60]">
                Swap your skills with people who want to learn what you know.
              </p>

            </div>


            {/* Steps */}

            <div className="space-y-4">

              <div className="rounded-2xl border border-[#D9DFD3] bg-white p-5">
                <h3 className="font-semibold text-[#1F6F5C]">
                  1. Browse Skills
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Explore users based on the skills you want to learn or the
                  skills you can offer.
                </p>
              </div>


              <div className="rounded-2xl border border-[#D9DFD3] bg-white p-5">
                <h3 className="font-semibold text-[#1F6F5C]">
                  2. View a Profile
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Open a user's profile to see their offered skills, wanted
                  skills, experience and other information.
                </p>
              </div>


              <div className="rounded-2xl border border-[#D9DFD3] bg-white p-5">
                <h3 className="font-semibold text-[#1F6F5C]">
                  3. Send a Swap Request
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Choose what you can offer, what you want to learn and send
                  the user a request with a message.
                </p>
              </div>


              <div className="rounded-2xl border border-[#D9DFD3] bg-white p-5">
                <h3 className="font-semibold text-[#1F6F5C]">
                  4. Find Relevant Matches
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  After sending a request, SkillSwap shows relevant users
                  based on the skills involved in your request.
                </p>
              </div>


              <div className="rounded-2xl border border-[#D9DFD3] bg-white p-5">
                <h3 className="font-semibold text-[#1F6F5C]">
                  5. Manage Your Swaps
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use My Swaps to view and manage the requests you have sent.
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  )
}

export default Home