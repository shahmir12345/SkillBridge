import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { users } from "../../models/userModel"

const Chat = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const user = users.find((user) => user.id === Number(id))

  const [message, setMessage] = useState("")

  const [messages, setMessages] = useState(() => {

        const savedMessages = localStorage.getItem(`chat_${id}`)

        if (savedMessages) {
            return JSON.parse(savedMessages)
        }

        return [
            {
            id: 1,
            sender: "user",
            text: "Hey! Are you interested in a skill swap?",
            time: "10:30 AM",
            },
            {
            id: 2,
            sender: "me",
            text: "Yes, definitely! I would love to learn from you.",
            time: "10:32 AM",
            },
            {
            id: 3,
            sender: "user",
            text: "Great! We can discuss the details here.",
            time: "10:34 AM",
            },
        ]
        })


    useEffect(() => {

    localStorage.setItem(
        `chat_${id}`,
        JSON.stringify(messages)
    )

    }, [messages, id])

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F8F5] px-4">

        <div className="rounded-2xl border border-[#D9DFD3] bg-white p-8 text-center shadow-sm">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F1EE] text-2xl text-[#1F6F5C]">
            ?
          </div>

          <h2 className="text-xl font-semibold text-[#16241F]">
            User not found
          </h2>

          <p className="mt-2 text-sm text-[#5C6B60]">
            The conversation you're looking for doesn't exist.
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-5 rounded-xl bg-[#1F6F5C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#153F35]"
          >
            Go Back
          </button>

        </div>

      </main>
    )
  }

  const deleteMessage = (messageId) => {

    setMessages((prevMessages) =>
      prevMessages.filter(
        (msg) => msg.id !== messageId
      )
    )
  
  }

  const sendMessage = (e) => {

    e.preventDefault()

    if (!message.trim()) return

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ])

    setMessage("")
  }

  return (
    <main className="min-h-screen bg-[#F7F8F5] px-4 py-6 text-[#16241F] sm:px-6 sm:py-8">

      <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#D9DFD3] bg-white shadow-sm">

        {/* ==================== CHAT HEADER ==================== */}

        <div className="flex items-center gap-4 bg-[#153F35] px-5 py-4 sm:px-6">

          {/* Back Button */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-white transition hover:bg-white/10"
          >
            ←
          </button>


          {/* Avatar */}

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F6F5C] font-serif text-lg font-semibold text-white">
            {user.name.charAt(0)}
          </div>


          {/* User Info */}

          <div className="min-w-0 flex-1">

            <h1 className="truncate font-semibold text-white">
              {user.name}
            </h1>

            <div className="mt-0.5 flex items-center gap-1.5">

              <span className="h-2 w-2 rounded-full bg-[#07ffb5]" />

              <span className="text-xs text-white/60">
                Online
              </span>

            </div>

          </div>


          {/* Profile Button */}

          <button
            type="button"
            onClick={() => navigate(`/profile/${user.id}`)}
            className="hidden rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 sm:block"
          >
            View Profile
          </button>

        </div>


        {/* ==================== CHAT AREA ==================== */}

        <div className="flex min-h-[55vh] flex-col gap-5 overflow-y-auto bg-[#F7F8F5] p-4 sm:p-6">

          {/* Date */}

          <div className="flex justify-center">

            <span className="rounded-full bg-white px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-[#7A867E] shadow-sm">
              Today
            </span>

          </div>


          {messages.map((msg) => (

            <div
              key={msg.id}
              className={`flex items-center gap-2 ${
                msg.sender === "me"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

            {msg.sender === "me" && (
                <button
                type="button"
                onClick={() => deleteMessage(msg.id)}
                className="h-fit self-center px-2 py-0.5 rounded text-[10px] font-medium text-white bg-red-500 transition border border-red-400 hover:scale-105"
                >
                Delete
                </button>
            )}

            <div
              
                className={`max-w-[80%] break-words sm:max-w-[65%] ${
                  msg.sender === "me"
                    ? "items-end"
                    : "items-start"
                } flex flex-col`}
              >

                <div
                  className={`max-w-full break-words whitespace-normal rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                    msg.sender === "me"
                      ? "rounded-br-md bg-[#1F6F5C] text-white"
                      : "rounded-bl-md border border-[#D9DFD3] bg-white text-[#16241F]"
                  }`}
                >
                  {msg.text}
                </div>

                <span className="mt-1 px-1 text-[10px] text-[#8A958D]">
                  {msg.time}
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* ==================== MESSAGE INPUT ==================== */}

        <form
          onSubmit={sendMessage}
          className="border-t border-[#E1E6DE] bg-white p-4 sm:p-5"
        >

          <div className="flex items-center gap-3">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Message ${user.name}...`}
              className="min-w-0 flex-1 rounded-xl border border-[#D9DFD3] bg-[#F7F8F5] px-4 py-3 text-sm text-[#16241F] outline-none transition placeholder:text-[#9AA49D] focus:border-[#1F6F5C] focus:ring-2 focus:ring-[#1F6F5C]/10"
            />

            <button
              type="submit"
              disabled={!message.trim()}
              className="shrink-0 rounded-xl bg-[#E2982F] px-4 py-3 text-sm font-semibold text-[#153F35] transition hover:bg-[#F0AC4D] disabled:cursor-not-allowed disabled:opacity-40 sm:px-6"
            >
              Send
            </button>

          </div>

        </form>

      </div>

    </main>
  )
}

export default Chat