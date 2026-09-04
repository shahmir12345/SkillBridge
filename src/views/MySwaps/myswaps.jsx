import React, { useEffect, useState } from "react"

const MySwaps = () => {

  const [requests, setRequests] = useState([])

  useEffect(() => {

    const savedRequests =
      JSON.parse(localStorage.getItem("swapRequests")) || []

    setRequests(savedRequests)

  }, [])


  // Delete request
  function handleDelete(id) {

    const updatedRequests = requests.filter(
      (request) => request.id !== id
    )

    setRequests(updatedRequests)

    localStorage.setItem(
      "swapRequests",
      JSON.stringify(updatedRequests)
    )
  }


  // Change request status
  function handleStatusChange(id, newStatus) {

    const updatedRequests = requests.map((request) =>
      request.id === id
        ? { ...request, status: newStatus }
        : request
    )

    setRequests(updatedRequests)

    localStorage.setItem(
      "swapRequests",
      JSON.stringify(updatedRequests)
    )
  }


  return (
    <main className="min-h-screen bg-[#e2e0e0] text-[#16241F]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#153F35] text-white">

        {/* Decorative Shapes */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1F6F5C]/40" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#1F6F5C]/30" />

        <div className="absolute right-[20%] top-[35%] h-20 w-20 rounded-full bg-[#E2982F]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 md:px-12">

          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8FD0BC]">
            Your activity
          </p>

          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
            My Swaps
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Keep track of your skill exchange requests and manage
            your ongoing swaps.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="px-5 py-10 sm:px-8 md:px-12 md:py-14">

        <div className="mx-auto max-w-7xl">


          {/* =================================================
              NO REQUESTS
          ================================================= */}

          {requests.length === 0 ? (

            <div className="rounded-3xl border border-[#D9DFD3] bg-white px-6 py-12 text-center shadow-sm sm:px-10">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F1EE] text-2xl text-[#1F6F5C]">
                ⇄
              </div>

              <h2 className="mt-5 font-serif text-xl font-semibold text-[#16241F]">
                No swap requests yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#5C6B60]">
                Your submitted skill swap requests will appear here.
                Browse the community and find someone to exchange skills with.
              </p>

            </div>

          ) : (

            <>

              {/* =============================================
                  SECTION HEADING
              ============================================= */}

              <div className="mb-7">

                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1F6F5C]">
                  Exchange activity
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

                  <div>

                    <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                      Your swap requests
                    </h2>

                    <p className="mt-2 text-sm text-[#5C6B60]">
                      {requests.length}{" "}
                      {requests.length === 1 ? "request" : "requests"}{" "}
                      in your activity.
                    </p>

                  </div>

                </div>

              </div>


              {/* =============================================
                  DESKTOP TABLE
              ============================================= */}

              <div className="hidden overflow-hidden rounded-2xl border border-[#D9DFD3] bg-white shadow-sm lg:block">

                {/* Table Header */}

                <div className="grid grid-cols-7 border-b border-[#D9DFD3] bg-[#EEF1EB] px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#68756D]">

                  <div>Member</div>
                  <div>You Offer</div>
                  <div>They Offer</div>
                  <div>Status</div>
                  <div>Date</div>
                  <div>Message</div>
                  <div>Actions</div>

                </div>


                {/* Requests */}

                {requests.map((request) => (

                  <div
                    key={request.id}
                    className="grid grid-cols-7 items-center border-b border-[#E7ECE5] px-6 py-5 text-sm last:border-b-0 hover:bg-[#FAFBF9]"
                  >

                    {/* Member */}

                    <div className="flex items-center gap-2">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-sm text-white">
                        {request.memberName?.charAt(0)}
                      </div>

                      <span className="font-semibold text-[#16241F]">
                        {request.memberName}
                      </span>

                    </div>


                    {/* You Offer */}

                    <div>

                      <span className="inline-block rounded-full bg-[#E7F1EE] px-3 py-1.5 font-mono text-[10px] text-[#153F35]">
                        {request.youOffer}
                      </span>

                    </div>


                    {/* They Offer */}

                    <div>

                      <span className="inline-block rounded-full bg-[#FBE7C6] px-3 py-1.5 font-mono text-[10px] text-[#8A5C15]">
                        {request.theyOffer}
                      </span>

                    </div>


                    {/* Status */}

                    <div>

                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-semibold ${
                          request.status === "Pending"
                            ? "bg-[#FFF3CD] text-[#8A6416]"
                            : request.status === "Completed"
                            ? "bg-[#E7F1EE] text-[#1F6F5C]"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {request.status}
                      </span>

                    </div>


                    {/* Date */}

                    <div className="text-xs text-[#68756D]">
                      {request.date}
                    </div>


                    {/* Message */}

                    <div
                      className="max-w-[170px] truncate text-xs text-[#5C6B60]"
                      title={request.message}
                    >
                      {request.message}
                    </div>


                    {/* Actions */}

                    <div>

                      <select
                        value=""
                        onChange={(e) => {

                          const selectedAction = e.target.value

                          if (selectedAction === "Pending") {
                            handleStatusChange(request.id, "Pending")
                          }

                          if (selectedAction === "Completed") {
                            handleStatusChange(request.id, "Completed")
                          }

                          if (selectedAction === "Delete") {
                            handleDelete(request.id)
                          }

                        }}
                        className="w-full max-w-[140px] rounded-full border border-[#CBD4C8] bg-white px-3 py-2 text-[10px] font-semibold text-[#5C6B60] outline-none transition focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]/20"
                      >

                        <option value="" disabled hidden>
                          Select Action
                        </option>

                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Completed">
                          Completed
                        </option>

                        <option value="Delete">
                          Delete
                        </option>

                      </select>

                    </div>

                  </div>

                ))}

              </div>


              {/* =============================================
                  MOBILE / TABLET CARDS
              ============================================= */}

              <div className="grid grid-cols-1 gap-5 lg:hidden">

                {requests.map((request) => (

                  <div
                    key={request.id}
                    className="rounded-2xl border border-[#D9DFD3] bg-white p-5 shadow-sm"
                  >

                    {/* Member + Status */}

                    <div className="flex items-start justify-between gap-3">

                      <div className="flex min-w-0 items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-base text-white">
                          {request.memberName?.charAt(0)}
                        </div>

                        <div className="min-w-0">

                          <h3 className="truncate text-sm font-semibold text-[#16241F]">
                            {request.memberName}
                          </h3>

                          <p className="mt-0.5 text-xs text-[#68756D]">
                            {request.date}
                          </p>

                        </div>

                      </div>


                      {/* Status */}

                      <span
                        className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold ${
                          request.status === "Pending"
                            ? "bg-[#FFF3CD] text-[#8A6416]"
                            : request.status === "Completed"
                            ? "bg-[#E7F1EE] text-[#1F6F5C]"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {request.status}
                      </span>

                    </div>


                    {/* Divider */}

                    <div className="my-5 h-px bg-[#E7ECE5]" />


                    {/* Skills */}

                    <div className="grid grid-cols-2 gap-4">

                      <div>

                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#68756D]">
                          You Offer
                        </p>

                        <span className="inline-block rounded-full bg-[#E7F1EE] px-3 py-1.5 font-mono text-[10px] text-[#153F35]">
                          {request.youOffer}
                        </span>

                      </div>


                      <div>

                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#68756D]">
                          They Offer
                        </p>

                        <span className="inline-block rounded-full bg-[#FBE7C6] px-3 py-1.5 font-mono text-[10px] text-[#8A5C15]">
                          {request.theyOffer}
                        </span>

                      </div>

                    </div>


                    {/* Message */}

                    <div className="mt-5">

                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#68756D]">
                        Message
                      </p>

                      <div className="rounded-xl bg-[#F7F8F5] px-4 py-3 text-xs leading-5 text-[#5C6B60]">
                        {request.message}
                      </div>

                    </div>


                    {/* Actions */}

                    <div className="mt-5">

                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#68756D]">
                        Manage Request
                      </p>

                      <select
                        value=""
                        onChange={(e) => {

                          const selectedAction = e.target.value

                          if (selectedAction === "Pending") {
                            handleStatusChange(request.id, "Pending")
                          }

                          if (selectedAction === "Completed") {
                            handleStatusChange(request.id, "Completed")
                          }

                          if (selectedAction === "Delete") {
                            handleDelete(request.id)
                          }

                        }}
                        className="w-full rounded-xl border border-[#CBD4C8] bg-white px-4 py-3 text-xs font-semibold text-[#5C6B60] outline-none transition focus:border-[#1F6F5C] focus:ring-2 focus:ring-[#1F6F5C]/20"
                      >

                        <option value="" disabled hidden>
                          Select Action
                        </option>

                        <option value="Pending">
                          Mark as Pending
                        </option>

                        <option value="Completed">
                          Mark as Completed
                        </option>

                        <option value="Delete">
                          Delete Request
                        </option>

                      </select>

                    </div>

                  </div>

                ))}

              </div>

            </>

          )}

        </div>

      </section>

    </main>
  )
}

export default MySwaps