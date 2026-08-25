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

    const updateRequests = requests.filter(
      (request) => request.id !== id
    )

    setRequests(updateRequests)

    localStorage.setItem(
      "swapRequests",
      JSON.stringify(updateRequests)
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
    <div className="min-h-screen bg-[#F7F5EF] px-4 py-8 sm:px-6 sm:py-10">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-2xl font-bold text-[#1F2A24] sm:text-3xl">
            My Swaps
          </h1>

          <p className="mt-2 text-sm text-[#5C6B60]">
            Manage your skill swap requests
          </p>

        </div>


        {/* No Requests */}
        {requests.length === 0 ? (

          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center sm:p-10">

            <h2 className="text-lg font-semibold text-gray-800">
              No swap requests yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your submitted swap requests will appear here.
            </p>

          </div>

        ) : (

          /* Responsive Table */
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">

            <div className="min-w-[1050px]">

              {/* Table Header */}
              <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">

                <div>Member</div>

                <div>You Offer</div>

                <div>They Offer</div>

                <div>Status</div>

                <div>Date</div>

                <div>Message</div>

                <div>Status Actions</div>

              </div>


              {/* Requests */}
              {requests.map((request) => (

                <div
                  key={request.id}
                  className="grid grid-cols-7 items-center border-b border-gray-100 px-6 py-5 text-sm last:border-b-0"
                >

                  {/* Member */}
                  <div className="font-medium text-gray-800">
                    {request.memberName}
                  </div>


                  {/* You Offer */}
                  <div className="text-gray-600">
                    {request.youOffer}
                  </div>


                  {/* They Offer */}
                  <div className="text-gray-600">
                    {request.theyOffer}
                  </div>


                  {/* Status */}
                  <div>

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : request.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {request.status}
                    </span>

                  </div>


                  {/* Date */}
                  <div className="text-gray-500">
                    {request.date}
                  </div>


                  {/* Message */}
                  <textarea
                    readOnly
                    value={request.message}
                    className="max-w-[180px] resize-none overflow-hidden text-gray-500"
                    title={request.message}
                  />


                    {/* Status Actions */}
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
                        className="w-full max-w-[150px] rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 outline-none focus:border-[#1F6F5C] focus:ring-1 focus:ring-[#1F6F5C]"
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

          </div>

        )}

      </div>

    </div>
  )
}

export default MySwaps