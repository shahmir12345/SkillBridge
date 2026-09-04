import React, { useState } from "react"
import { users } from "../../models/userModel"
import {
  skillCategories,
  skillLevels,
  sortOptions,
} from "../../models/skillModel"
import { useNavigate } from "react-router-dom"

const Browse = () => {

  const navigate = useNavigate()

  // Search input
  const [search, setSearch] = useState("")

  // Selected category
  const [category, setCategory] = useState("All")

  // Selected level
  const [level, setLevel] = useState("All")

  // Selected sorting option
  const [sortBy, setSortBy] = useState("Newest")


  // ================= FILTER USERS =================

  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.offeredSkills.some((skill) =>
        skill.name.toLowerCase().includes(search.toLowerCase())
      )

    const matchesCategory =
      category === "All" ||
      user.offeredSkills.some(
        (skill) => skill.category === category
      )

    const matchesLevel =
      level === "All" ||
      user.offeredSkills.some(
        (skill) => skill.level === level
      )

    return matchesSearch && matchesCategory && matchesLevel
  })


  // ================= SORT USERS =================

  const sortedUsers = [...filteredUsers].sort((a, b) => {

    if (sortBy === "A-Z") {
      return a.name.localeCompare(b.name)
    }

    if (sortBy === "Ratings") {
      return b.rating - a.rating
    }

    return b.id - a.id
  })


  return (

    <main className="min-h-screen bg-[#e2e0e0] text-[#16241F]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#153F35] text-white">

        {/* Decorative circles */}

        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1F6F5C]/40" />

        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#1F6F5C]/30" />

        <div className="absolute right-[25%] top-10 h-20 w-20 rounded-full bg-[#E2982F]/10" />


        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 md:px-12">

          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8FD0BC]">
            Explore the community
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Browse Skills
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Find people who can teach you a skill and discover what you
            can offer in return.
          </p>

        </div>

      </section>


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="px-5 py-8 sm:px-8 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-5">

            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
              Find your match
            </p>

            <h2 className="mt-1 font-serif text-xl font-semibold sm:text-2xl">
              Search & Filter
            </h2>

          </div>


          <div className="rounded-2xl border border-[#D9DFD3] bg-white p-5 shadow-sm sm:p-6">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* Search */}

              <div>

                <label className="mb-2 block text-xs font-semibold text-[#435149]">
                  Search
                </label>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search skills..."
                  className="w-full rounded-xl border border-[#CBD4C8] bg-[#F7F8F5] px-4 py-3 text-sm text-[#16241F] outline-none transition placeholder:text-[#89948C] focus:border-[#1F6F5C] focus:bg-white focus:ring-2 focus:ring-[#1F6F5C]/10"
                />

              </div>


              {/* Category */}

              <div>

                <label className="mb-2 block text-xs font-semibold text-[#435149]">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-[#CBD4C8] bg-[#F7F8F5] px-4 py-3 text-sm text-[#16241F] outline-none transition focus:border-[#1F6F5C] focus:bg-white focus:ring-2 focus:ring-[#1F6F5C]/10"
                >

                  <option value="All">All Categories</option>

                  {skillCategories
                    .filter((item) => item !== "All")
                    .map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}

                </select>

              </div>


              {/* Level */}

              <div>

                <label className="mb-2 block text-xs font-semibold text-[#435149]">
                  Level
                </label>

                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full rounded-xl border border-[#CBD4C8] bg-[#F7F8F5] px-4 py-3 text-sm text-[#16241F] outline-none transition focus:border-[#1F6F5C] focus:bg-white focus:ring-2 focus:ring-[#1F6F5C]/10"
                >

                  <option value="All">All Levels</option>

                  {skillLevels.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}

                </select>

              </div>


              {/* Sort */}

              <div>

                <label className="mb-2 block text-xs font-semibold text-[#435149]">
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full rounded-xl border border-[#CBD4C8] bg-[#F7F8F5] px-4 py-3 text-sm text-[#16241F] outline-none transition focus:border-[#1F6F5C] focus:bg-white focus:ring-2 focus:ring-[#1F6F5C]/10"
                >

                  {sortOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}

                </select>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MEMBERS
      ===================================================== */}

      <section className="px-5 pb-16 sm:px-8 md:px-12">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}

          <div className="mb-6 flex items-end justify-between">

            <div>

              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
                Community
              </p>

              <h2 className="font-serif text-2xl font-semibold">
                Members
              </h2>

            </div>

            <span className="rounded-full bg-[#E7F1EE] px-3 py-1.5 font-mono text-[11px] text-[#153F35]">
              {filteredUsers.length} members
            </span>

          </div>


          {/* No members */}

          {filteredUsers.length === 0 ? (

            <div className="rounded-2xl border border-[#D9DFD3] bg-white px-5 py-14 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F1EE] text-2xl text-[#1F6F5C]">
                ?
              </div>

              <h3 className="mt-4 font-serif text-lg font-semibold">
                No members found
              </h3>

              <p className="mt-2 text-sm text-[#68756D]">
                Try changing your search or filters.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {sortedUsers.map((user) => (

                <div
                  key={user.id}
                  onClick={() => navigate(`/profile/${user.id}`)}
                  className="group cursor-pointer rounded-2xl border border-[#D9DFD3] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B8CEC5] hover:shadow-lg"
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


                    {/* Rating */}

                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#FBE7C6] px-2.5 py-1">

                      <span className="text-xs text-[#E2982F]">
                        ★
                      </span>

                      <span className="text-xs font-semibold text-[#8A5C15]">
                        {user.rating}
                      </span>

                    </div>

                  </div>


                  {/* Divider */}

                  <div className="mb-4 h-px bg-[#E7ECE5]" />


                  {/* Bio */}

                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-[#5C6B60]">
                    {user.bio}
                  </p>


                  {/* Offers */}

                  <div className="mb-4">

                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#7A867E]">
                      Can teach
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {user.offeredSkills.map((skill, index) => (

                        <span
                          key={index}
                          className="rounded-full bg-[#E7F1EE] px-3 py-1.5 font-mono text-[11px] text-[#153F35]"
                        >
                          {skill.name}
                        </span>

                      ))}

                    </div>

                  </div>


                  {/* Wants */}

                  <div>

                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#7A867E]">
                      Wants to learn
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {user.wantedSkills.map((skill, index) => (

                        <span
                          key={index}
                          className="rounded-full bg-[#FBE7C6] px-3 py-1.5 font-mono text-[11px] text-[#8A5C15]"
                        >
                          {skill.name}
                        </span>

                      ))}

                    </div>

                  </div>


                  {/* View profile hint */}

                  <div className="mt-5 border-t border-[#E7ECE5] pt-4 text-xs font-semibold text-[#1F6F5C] opacity-0 transition group-hover:opacity-100">
                    View profile →
                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  )
}

export default Browse