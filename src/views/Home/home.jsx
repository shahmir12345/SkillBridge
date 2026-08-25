import React, {useState} from "react"
import { users } from "../../models/userModel"
import { Link } from "react-router-dom"

const Home = () => {

  const [showHowItWorks, setShowHowItWorks] = useState(false)

  return (
    <main className="bg-[#F2F4EC] text-[#16241F]">

      {/* ==================== Hero Section ==================== */}
      <section className="px-8 py-16 md:px-12">

        <div className="max-w-[600px]">

          {/* Eyebrow */}
          <div className="mb-3.5 font-mono text-xs uppercase tracking-wider text-[#1F6F5C]">
            A community skill exchange
          </div>

          {/* Main Heading */}
          <h1 className="mb-[18px] max-w-[600px] font-serif text-[44px] font-semibold leading-[1.08]">
            Trade what you know
            <br />
            <em className="text-[#1F6F5C]">
              for what you want to learn
            </em>
          </h1>

          {/* Description */}
          <p className="mb-[26px] max-w-[460px] text-[15px] leading-[1.6] text-[#5C6B60]">
            List a skill you can teach, find someone who wants it, and swap
            for a skill you've been wanting to pick up — no money involved.
          </p>

          {/* Hero Buttons */}
          <div className="mb-11 flex gap-3">

            <Link 
            to="/browse"
            className="rounded-lg bg-[#1F6F5C] px-[18px] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#153F35]">
              Browse Skills
            </Link>

            <button 
            onClick={() => setShowHowItWorks(true)}
            className="rounded-lg border border-[#1F6F5C] bg-transparent px-[18px] py-2.5 text-[13px] font-semibold text-[#1F6F5C] transition hover:bg-[#1F6F5C] hover:text-white">
              See how it works
            </button>

          </div>

          {/* Skill Swap Visual */}
          <div className="mt-2.5 flex items-center gap-3.5">

            <span className="rounded-full border border-[#1F6F5C] bg-white px-4 py-2 font-mono text-xs text-[#153F35]">
              I teach → React
            </span>

            <span className="text-xl text-[#E2982F]">
              ⇄
            </span>

            <span className="rounded-full border border-[#E2982F] bg-white px-4 py-2 font-mono text-xs text-[#8A5C15]">
              I learn → Python
            </span>

          </div>

        </div>

      </section>


      {/* ==================== Featured Members ==================== */}
      <section className="px-8 pb-14 md:px-12">

        {/* Section Heading */}
        <h2 className="mb-[18px] font-serif text-[22px] font-semibold">
          Featured members
        </h2>

        {/* Members Grid */}
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">

          {users.slice(0, 3).map((user) => (

            <div
              key={user.id}
              className="rounded-[14px] border border-[#D9DFD3] bg-white p-5 transition hover:-translate-y-0.5"
            >

              {/* User Information */}
              <div className="mb-3.5 flex items-center gap-3">

                {/* Avatar */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-base text-white">
                  {user.name.charAt(0)}
                </div>

                {/* Name + Location */}
                <div>

                  <div className="text-sm font-semibold">
                    {user.name}
                  </div>

                  <div className="text-xs text-[#5C6B60]">
                    {user.location}
                  </div>

                </div>

              </div>


              {/* Offered Skill */}
              <div className="mt-2.5">

                <span className="rounded-full bg-[#E7F1EE] px-2.5 py-1 font-mono text-[11px] text-[#153F35]">
                  Offers: {user.offeredSkills[0].name}
                </span>

              </div>


              {/* Wanted Skill */}
              <div className="mt-2.5">

                <span className="rounded-full bg-[#FBE7C6] px-2.5 py-1 font-mono text-[11px] text-[#8A5C15]">
                  Wants: {user.wantedSkills[0].name}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

          {/* Show how it works  */}

          {showHowItWorks && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

           <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">

          {/* Close Button */}
          <button
            onClick={() => setShowHowItWorks(false)}
            className="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-900"
          >
            ✕
          </button>

          {/* Heading */}
          <h2 className="mb-2 text-2xl font-bold text-[#16241F]">
            How SkillSwap Works
          </h2>

          <p className="mb-6 text-sm text-[#5C6B60]">
            Swap your skills with people who want to learn what you know.
          </p>

          {/* Steps */}
          <div className="space-y-5">

            <div>
              <h3 className="font-semibold text-[#1F6F5C]">
                1. Browse Skills
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Explore users based on the skills you want to learn or the
                skills you can offer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1F6F5C]">
                2. View a Profile
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Open a user's profile to see their offered skills, wanted
                skills, experience and other information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1F6F5C]">
                3. Send a Swap Request
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Choose what you can offer, what you want to learn and send
                the user a request with a message.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1F6F5C]">
                4. Find Relevant Matches
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                After sending a request, SkillSwap shows relevant users
                based on the skills involved in your request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1F6F5C]">
                5. Manage Your Swaps
              </h3>

              <p className="mt-1 text-sm text-gray-600">
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