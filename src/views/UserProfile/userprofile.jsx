import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { users } from "../../models/userModel"

const UserProfile = () => {

const navigate = useNavigate()

const { id } = useParams()

const user = users.find((user) => user.id === Number(id))

if (!user) {
return ( <div className="flex min-h-screen items-center justify-center bg-[#F7F8F5] px-4">

```
    <div className="rounded-2xl border border-[#D9DFD3] bg-white p-8 text-center shadow-sm">

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F1EE] text-2xl text-[#1F6F5C]">
        ?
      </div>

      <h2 className="text-xl font-semibold text-[#16241F]">
        User not found
      </h2>

      <p className="mt-2 text-sm text-[#5C6B60]">
        The profile you're looking for doesn't exist.
      </p>

    </div>

  </div>
)

}

return ( <main className="min-h-screen bg-[#F7F8F5] px-4 py-8 text-[#16241F] sm:px-6 sm:py-12">

  <div className="mx-auto max-w-4xl">


    {/* ==================== BACK ==================== */}

    <button
      type="button"
      onClick={() => navigate(-1)}
      className="mb-6 text-sm font-semibold text-[#1F6F5C] transition hover:text-[#153F35]"
    >
      ← Back to Browse
    </button>


    {/* ==================== PROFILE CARD ==================== */}

    <div className="overflow-hidden rounded-3xl border border-[#D9DFD3] bg-white shadow-sm">


      {/* Top Accent */}

      <div className="h-3 bg-[#153F35]" />


      {/* ==================== PROFILE HEADER ==================== */}

      <div className="p-6 sm:p-8">

        <div className="flex flex-col gap-6 border-b border-[#E1E6DE] pb-7 sm:flex-row sm:items-center">


          {/* Avatar */}

          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-4xl font-semibold text-white shadow-md">

            {user.name.charAt(0)}

          </div>


          {/* User Info */}

          <div className="min-w-0 flex-1">

            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
              SkillBridge Member
            </p>

            <h1 className="font-serif text-3xl font-semibold text-[#16241F] sm:text-4xl">
              {user.name}
            </h1>

            <p className="mt-2 text-sm text-[#5C6B60]">
              📍 {user.location}
            </p>

            <p className="mt-1 text-xs text-[#7A867E]">
              Joined {user.joined}
            </p>

          </div>


          {/* Rating */}

          <div className="flex w-fit items-center gap-2 rounded-full bg-[#FBE7C6] px-4 py-2">

            <span className="text-base text-[#E2982F]">
              ★
            </span>

            <div>

              <span className="text-sm font-bold text-[#8A5C15]">
                {user.rating}
              </span>

              <span className="ml-1 text-xs text-[#8A6D36]">
                rating
              </span>

            </div>

          </div>

        </div>


        {/* ==================== ABOUT ==================== */}

        <div className="border-b border-[#E1E6DE] py-7">

          <div className="mb-3 flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-[#E2982F]" />

            <h2 className="font-serif text-xl font-semibold text-[#16241F]">
              About
            </h2>

          </div>

          <p className="max-w-3xl text-sm leading-7 text-[#5C6B60]">
            {user.bio}
          </p>

        </div>


        {/* ==================== SKILLS ==================== */}

        <div className="grid gap-6 py-7 md:grid-cols-2">


          {/* ==================== CAN TEACH ==================== */}

          <div className="rounded-2xl border border-[#C9DDD5] bg-[#E7F1EE] p-5">

            <div className="mb-5">

              <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#1F6F5C]">
                Knowledge to share
              </p>

              <h2 className="font-serif text-xl font-semibold text-[#153F35]">
                Skills I Can Teach
              </h2>

            </div>


            <div className="space-y-3">

              {user.offeredSkills.map((skill) => (

                <div
                  key={skill.name}
                  className="rounded-xl border border-[#C9DDD5] bg-white p-4 shadow-sm"
                >

                  <div className="flex items-start justify-between gap-3">

                    <p className="font-semibold text-[#16241F]">
                      {skill.name}
                    </p>

                    <span className="rounded-full bg-[#E7F1EE] px-2 py-1 font-mono text-[9px] text-[#1F6F5C]">
                      Teach
                    </span>

                  </div>

                  <p className="mt-2 text-xs text-[#5C6B60]">
                    {skill.category} • {skill.level}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* ==================== WANT TO LEARN ==================== */}

          <div className="rounded-2xl border border-[#E8D09E] bg-[#FBE7C6] p-5">

            <div className="mb-5">

              <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#A16B17]">
                Skills to discover
              </p>

              <h2 className="font-serif text-xl font-semibold text-[#6F4A12]">
                Skills I Want to Learn
              </h2>

            </div>


            <div className="space-y-3">

              {user.wantedSkills.map((skill) => (

                <div
                  key={skill.name}
                  className="rounded-xl border border-[#E8D09E] bg-white p-4 shadow-sm"
                >

                  <div className="flex items-start justify-between gap-3">

                    <p className="font-semibold text-[#16241F]">
                      {skill.name}
                    </p>

                    <span className="rounded-full bg-[#FBE7C6] px-2 py-1 font-mono text-[9px] text-[#8A5C15]">
                      Learn
                    </span>

                  </div>

                  <p className="mt-2 text-xs text-[#5C6B60]">
                    {skill.category} • {skill.level}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ==================== REQUEST CTA ==================== */}

        <div className="border-t border-[#E1E6DE] pt-7">

          <div className="rounded-2xl bg-[#153F35] p-5 sm:p-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8FD0BC]">
                  Ready to exchange?
                </p>

                <h2 className="mt-1 font-serif text-xl font-semibold text-white">
                  Start a skill swap with {user.name}
                </h2>

                <p className="mt-1 text-sm text-white/60">
                  Choose what you can teach and what you'd like to learn.
                </p>

              </div>


              <button
                type="button"
                onClick={() => navigate(`/request/${user.id}`)}
                className="shrink-0 rounded-xl bg-[#E2982F] px-6 py-3 text-sm font-semibold text-[#153F35] shadow-sm transition hover:bg-[#F0AC4D] hover:shadow-md"
              >
                Request Swap →
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</main>

)
}

export default UserProfile
