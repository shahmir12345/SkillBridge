import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Matches = () => {

    //yeh temoporaray data store karn eke liye tha 
//   const location = useLocation()


  const navigate = useNavigate()

  const savedMatches =JSON.parse(localStorage.getItem("currentMatches")) || []

  return (
    <div className="min-h-screen bg-[#F7F5EF] px-6 py-10">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-[#1F2A24]">
            Another relevant matches for you
          </h1>

          <p className="mt-2 text-sm text-[#5C6B60]">
            Based on the skill you requested, here are some people
            who may be a good match for you.
          </p>

        </div>


        {/* No Matches */}
        {savedMatches.length === 0 ? (

          <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">

            <h2 className="text-lg font-semibold text-gray-800">
              No relevant matches found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try browsing more skills and sending another request.
            </p>

          </div>

        ) : (

          /* Matches */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {savedMatches.map((user) => (

              <div
                key={user.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                {/* User */}
                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-base text-white">
                    {user.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-gray-900">
                      {user.name}
                    </h3>

                    <p className="text-xs text-[#5C6B60]">
                      {user.location}
                    </p>

                  </div>

                </div>


                {/* Rating */}
                <div className="mb-4">

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    ⭐ {user.rating}
                  </span>

                </div>


                {/* Bio */}
                <p className="mb-5 text-sm leading-6 text-gray-600">
                  {user.bio}
                </p>


                {/* Skills */}
                <div className="mb-5">

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Skills they offer
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {user.offeredSkills.map((skill) => (

                      <span
                        key={skill.name}
                        className="rounded-full bg-[#E6F0EB] px-3 py-1 text-xs text-[#1F6F5C]"
                      >
                        {skill.name}
                      </span>

                    ))}

                  </div>

                </div>


                {/* View Profile */}
                <button
                  onClick={() => navigate(`/profile/${user.id}`)}
                  className="w-full rounded-lg bg-[#1F6F5C] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#185747]"
                >
                  View Profile
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default Matches