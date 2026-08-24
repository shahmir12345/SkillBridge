import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { users } from "../../models/userModel"

const UserProfile = () => {

   const navigate = useNavigate()

  //useParams() = URL ke :parameter ki actual value nikalne ka React Router hook. 
  const { id } = useParams()

  const user = users.find((user) => user.id === Number(id))

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F8F5]">
        <h2 className="text-xl font-semibold text-[#16241F]">
          User not found
        </h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F8F5] px-6 py-10">

      <div className="mx-auto max-w-4xl">

        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-sm font-medium text-[#1F6F5C] hover:underline"
        >
          ← Back to Browse
        </button>

        {/* Profile Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          {/* User Header */}
          <div className="flex flex-col gap-5 border-b border-gray-200 pb-6 sm:flex-row sm:items-center">

            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] text-2xl font-bold text-white">
              {user.name.charAt(0)}
            </div>

            {/* Basic Info */}
            <div className="flex-1">

              <h1 className="text-2xl font-bold text-[#16241F]">
                {user.name}
              </h1>

              <p className="mt-1 text-sm text-[#5C6B60]">
                {user.location}
              </p>

              <p className="mt-1 text-sm text-[#5C6B60]">
                Joined {user.joined}
              </p>

            </div>

            {/* Rating */}
            <div className="flex w-fit items-center gap-1 rounded-full bg-[#FFF3CD] px-3 py-2">
              <span className="text-sm">★</span>

              <span className="text-sm font-semibold text-[#8A6416]">
                {user.rating}
              </span>
            </div>

          </div>

          {/* Bio */}
          <div className="py-6">

            <h2 className="mb-2 text-lg font-semibold text-[#16241F]">
              About
            </h2>

            <p className="text-sm leading-6 text-[#5C6B60]">
              {user.bio}
            </p>

          </div>

          {/* Skills */}
          <div className="grid gap-6 border-t border-gray-200 pt-6 md:grid-cols-2">

            {/* Offered Skills */}
            <div>

              <h2 className="mb-4 text-lg font-semibold text-[#16241F]">
                Skills I Can Teach
              </h2>

              <div className="space-y-3">

                {user.offeredSkills.map((skill) => (

                  <div
                    key={skill.name}
                    className="rounded-xl border border-gray-200 bg-[#F7F8F5] p-4"
                  >

                    <p className="font-medium text-[#16241F]">
                      {skill.name}
                    </p>

                    <p className="mt-1 text-xs text-[#5C6B60]">
                      {skill.category} • {skill.level}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Wanted Skills */}
            <div>

              <h2 className="mb-4 text-lg font-semibold text-[#16241F]">
                Skills I Want to Learn
              </h2>

              <div className="space-y-3">

                {user.wantedSkills.map((skill) => (

                  <div
                    key={skill.name}
                    className="rounded-xl border border-gray-200 bg-[#F7F8F5] p-4"
                  >

                    <p className="font-medium text-[#16241F]">
                      {skill.name}
                    </p>

                    <p className="mt-1 text-xs text-[#5C6B60]">
                      {skill.category} • {skill.level}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Request Button */}
          <div className="mt-8 border-t border-gray-200 pt-6"
               onClick={()=> navigate(`/request/${user.id}`)}
          >

            <button
              className="w-full rounded-xl bg-[#1F6F5C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#185747]"
            >
              Request Swap
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default UserProfile