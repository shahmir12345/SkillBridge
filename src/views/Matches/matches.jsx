import React from "react"
import { useNavigate } from "react-router-dom"

const Matches = () => {

  const navigate = useNavigate()

  const savedMatches =
    JSON.parse(localStorage.getItem("currentMatches")) || []


  return (

    <main className="min-h-screen bg-[#e2e0e0] text-[#16241F]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#153F35] text-white">

        {/* Decorative Background */}

        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1F6F5C]/40" />

        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#1F6F5C]/30" />

        <div className="absolute right-[25%] top-10 h-20 w-20 rounded-full bg-[#E2982F]/10" />


        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 md:px-12">

          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8FD0BC]">
            Skill compatibility
          </p>

          <h1 className="max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Relevant Matches
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Based on the skills you requested, here are people who
            may be a good match for you.
          </p>

        </div>

      </section>


      {/* =====================================================
          MATCHES
      ===================================================== */}

      <section className="px-5 py-10 sm:px-8 md:px-12 md:py-14">

        <div className="mx-auto max-w-7xl">


          {/* Match count */}

          {savedMatches.length > 0 && (

            <div className="mb-6 flex items-center justify-between">

              <div>

                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
                  Your suggestions
                </p>

                <h2 className="mt-1 font-serif text-2xl font-semibold">
                  People you may know
                </h2>

              </div>

              <span className="rounded-full bg-[#E7F1EE] px-3 py-1.5 font-mono text-[11px] text-[#153F35]">
                {savedMatches.length} matches
              </span>

            </div>

          )}


          {/* =================================================
              NO MATCHES
          ================================================= */}

          {savedMatches.length === 0 ? (

            <div className="rounded-3xl border border-[#D9DFD3] bg-white px-5 py-16 text-center shadow-sm sm:px-10">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E7F1EE] text-2xl text-[#1F6F5C]">
                ⇄
              </div>

              <h2 className="mt-5 font-serif text-xl font-semibold sm:text-2xl">
                No relevant matches found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#68756D]">
                Try browsing more skills and sending another request.
                New requests can help you discover better matches.
              </p>

              <button
                type="button"
                onClick={() => navigate("/browse")}
                className="mt-6 rounded-xl bg-[#1F6F5C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#185747] hover:shadow-md"
              >
                Browse Skills
              </button>

            </div>

          ) : (


            /* =================================================
               MATCH CARDS
            ================================================= */

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {savedMatches.map((user) => (

                <div
                  key={user.id}
                  className="group rounded-2xl border border-[#D9DFD3] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B8CEC5] hover:shadow-lg"
                >

                  {/* User */}

                  <div className="mb-5 flex items-center gap-3">

                    {/* Avatar */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-lg text-white shadow-sm">
                      {user.name.charAt(0)}
                    </div>


                    {/* Name */}

                    <div className="min-w-0 flex-1">

                      <h3 className="truncate text-sm font-semibold text-[#16241F]">
                        {user.name}
                      </h3>

                      <p className="mt-0.5 truncate text-xs text-[#5C6B60]">
                        {user.location}
                      </p>

                    </div>

                  </div>


                  {/* Rating */}

                  <div className="mb-5">

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBE7C6] px-3 py-1.5">

                      <span className="text-[#E2982F]">
                        ★
                      </span>

                      <span className="text-xs font-semibold text-[#8A5C15]">
                        {user.rating}
                      </span>

                    </span>

                  </div>


                  {/* Divider */}

                  <div className="mb-4 h-px bg-[#E7ECE5]" />


                  {/* Bio */}

                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-[#5C6B60]">
                    {user.bio}
                  </p>


                  {/* Skills */}

                  <div>

                    {/* Offers */}

                    <div>

                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#7A867E]">
                        Can teach
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {user.offeredSkills.map((skill) => (

                          <span
                            key={skill.name}
                            className="rounded-full bg-[#E7F1EE] px-3 py-1.5 font-mono text-[11px] text-[#153F35]"
                          >
                            {skill.name}
                          </span>

                        ))}

                      </div>

                    </div>


                    {/* Wants */}

                    <div className="mt-4">

                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#7A867E]">
                        Wants to learn
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {user.wantedSkills.map((skill) => (

                          <span
                            key={skill.name}
                            className="rounded-full bg-[#FBE7C6] px-3 py-1.5 font-mono text-[11px] text-[#8A5C15]"
                          >
                            {skill.name}
                          </span>

                        ))}

                      </div>

                    </div>

                  </div>


                  {/* View Profile */}

                  <button
                    type="button"
                    onClick={() => navigate(`/profile/${user.id}`)}
                    className="mt-6 w-full rounded-xl bg-[#1F6F5C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#185747] hover:shadow-md active:scale-[0.98]"
                  >
                    View Profile
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  )
}

export default Matches