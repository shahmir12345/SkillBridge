import React, { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)

  // Check logged-in user when app starts
  useEffect(() => {

    const savedUser =
      JSON.parse(localStorage.getItem("currentUser"))

    if (savedUser) {
      setCurrentUser(savedUser)
    }

  }, [])


  // Login user
  const login = (user) => {

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    )

    setCurrentUser(user)
  }


  // Logout user
  const logout = () => {

    localStorage.removeItem("currentUser")

    setCurrentUser(null)
  }


  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


// Custom hook
export const useAuth = () => {
  return useContext(AuthContext)
}