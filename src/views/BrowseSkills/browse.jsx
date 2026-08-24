import React, { useState } from "react"
import { users } from "../../models/userModel"
import {skillCategories,skillLevels,sortOptions,} from "../../models/skillModel"
import { useNavigate } from "react-router-dom"

const Browse = () => {

  const navigate = useNavigate()

  // Search input ki value
  const [search, setSearch] = useState("")

  // Selected category
  const [category, setCategory] = useState("All")

  // Selected level
  const [level, setLevel] = useState("All")

  // Selected sorting option
  const [sortBy, setSortBy] = useState("Newest")

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
    <main className="min-h-screen bg-[#F2F4EC] text-[#16241F]">

      {/* ==================== Header ==================== */}
      <section className="border-b border-[#D9DFD3] bg-[#F2F4EC] px-8 py-12 md:px-12">

        <div className="mx-auto max-w-7xl">

          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[#1F6F5C]">
            Explore the community
          </p>

          <h1 className="mb-3 font-serif text-[40px] font-semibold leading-tight">
            Browse Skills
          </h1>

          <p className="max-w-xl text-[15px] leading-6 text-[#5C6B60]">
            Find people who can teach you a skill and discover what you
            can offer in return.
          </p>

        </div>

      </section>


      {/* ==================== Filters ==================== */}
      <section className="px-8 py-7 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

            {/* Search */}
            <div className="md:col-span-1">

              <label className="mb-2 block text-xs font-semibold text-[#435149]">
                Search
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search skills..."
                className="w-full rounded-lg border border-[#CBD4C8] bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-[#89948C] focus:border-[#1F6F5C]"
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
                className="w-full rounded-lg border border-[#CBD4C8] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1F6F5C]"
              >

                <option value="All">All</option>

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
                className="w-full rounded-lg border border-[#CBD4C8] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1F6F5C]"
              >

                <option value="All">All</option>

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
                Sort
              </label>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-lg border border-[#CBD4C8] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1F6F5C]"
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

      </section>


      {/* ==================== Members ==================== */}
      <section className="px-8 pb-16 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="font-serif text-[22px] font-semibold">
              Members
            </h2>

            <span className="font-mono text-xs text-[#6B776F]">
              {users.length} members
            </span>

          </div>


          {/* Member Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.length === 0 ? (
            <div className="col-span-full py-12 text-center">
                <p className="font-serif text-lg font-semibold">
                No members found
                </p>

                <p className="mt-1 text-sm text-[#68756D]">
                Try changing your search or filters.
                </p>
            </div>
            ) : (
            sortedUsers.map((user) => (

              <div
                key={user.id}
                onClick={() => navigate(`/profile/${user.id}`)}
                className="cursor-pointer rounded-[14px] border border-[#D9DFD3] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >

                {/* User */}
                <div className="mb-4 flex items-center gap-3">

                {/* Avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-base text-white">
                     {user.name.charAt(0)}
                </div>

                {/* Name + Location */}
                <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-semibold text-[#16241F]">
                        {user.name}
                    </h3>

                    <p className="text-xs text-[#5C6B60]">
                        {user.location}
                    </p>

                </div>

                {/* Rating */}
                <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#FFF3CD] px-2.5 py-1">
                    <span className="text-xs">★</span>

                    <span className="text-xs font-semibold text-[#8A6416]">
                        {user.rating}
                    </span>
                </div>

                </div>


                {/* Bio */}
                <p className="mb-4 text-sm leading-5 text-[#5C6B60]">
                  {user.bio}
                </p>


                {/* Offered Skills */}
                <div className="mb-3">

                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#68756D]">
                    Offers
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {user.offeredSkills.map((skill, index) => (

                      <span
                        key={index}
                        className="rounded-full bg-[#E7F1EE] px-2.5 py-1 font-mono text-[11px] text-[#153F35]"
                      >
                        {skill.name}
                      </span>

                    ))}

                  </div>

                </div>


                {/* Wanted Skills */}
                <div>

                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#68756D]">
                    Wants
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {user.wantedSkills.map((skill, index) => (

                      <span
                        key={index}
                        className="rounded-full bg-[#FBE7C6] px-2.5 py-1 font-mono text-[11px] text-[#8A5C15]"
                      >
                        {skill.name}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            )))}

          </div>

        </div>

      </section>

    </main>
  )
}

export default Browse